import { User } from "./user.modal.js";
import { weeks } from "./getWeeks.js";
import bcrypt from "bcrypt";
const saltRounds = 10;
import jwt from "jsonwebtoken";

class userMethods {
  constructor() {}

  //create new user to data base
  async SignUp(req, res) {
    //check if already present or not
    const userpresent = await User.findOne({ email: req.body.email }).catch(
      (err) => console.log(err)
    );
    if (userpresent) {
      return res.status(409).json({
        message: "user is already present",
      });
    }
    //hash the password
    const hashPassword = bcrypt.hashSync(req.body.password, saltRounds);
    //if new user create the user
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
      weeks: weeks,
    }).catch((err) => console.log(err));
    console.log("sign up successfull");
    return res.status(200).send({
      userId: user._id,
      message: "user created successfully",
    });
  }

  //sign in user
  async SignIn(req, res) {
    //find the user into db
    const user = await User.findOne({ email: req.body.email });
    //match the hashed password from db
    if (user) {
      const match = bcrypt.compareSync(req.body.password, user.password);
      if (match) {
        const token = jwt.sign({ userId: user.id }, "#8se34w&#$^&@#UBE@", {
          expiresIn: "15d",
        });
        return res.status(200).json({
          userId: user.id,
          name: user.name,
          bedTime: user.bedTime,
          weeks: user.weeks,
          token,
          message: "sign in successfuly",
        });
      }
      return res.status(401).json({
        message: "invalid password",
      });
    }
    return res.status(403).json({
      message: "invalid crediantails",
    });
  }

  //fetch user if already loged in on user router
  async authUser(req, res) {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(404).json({
        message: "User not found.",
      });
    }
    //decode data
    try {
      const data = jwt.verify(token, "#8se34w&#$^&@#UBE@");
      //check user data and send back
      const user = await User.findById(data.userId).catch((err) =>
        console.log(err)
      );
      if (user) {
        return res.status(200).json({
          weeks: user.weeks,
          name: user.name,
          userId: user.id,
          bedTime: user.bedTime,
        });
      }
    } catch (error) {
      console.log(error);
    }

    return res.status(404).json({
      message: "User not found.",
    });
  }
}

export const userController = new userMethods();
