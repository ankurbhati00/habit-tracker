import { User } from "./user.modal.js";
import { weeks } from "./getWeeks.js";
import bcrypt from "bcrypt";
const saltRounds = 10;
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
      weeks:weeks
    }).catch((err) => console.log(err));
    console.log("sign up successfull");
    return res.status(200).send({
      userId: user._id,
      message: "user created successfully",
    });
  }

  //sign up user
  async SignIn(req, res) {
    //find the user into db
    const user = await User.findOne({ email: req.body.email });
    //match the hashed password from db
    if (user) {
      const match = bcrypt.compareSync(req.body.password, user.password);
      if (match) {
        // console.log(user, match);
        //set the sessions
        req.session.user = user.id;
        req.session.authorized = true;
        // req.session.save();
        console.log("sign in successful", req.session);
        return res.status(200).json({
          userId: user.id,
          name: user.name,
          bedTime: user.bedTime,
          weeks:user.weeks,
          message: "sign in successfuly"
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

  //logout
  logOut(req, res) {
    req.session.destroy();
    return res.status(200).json({
      message: "log out successfull",
    });
  }

  //fetch user if already loged in on user router
  async authUser(req, res) {
    
    if (req.session.user) {
      //check user data and send back
      const user = await User.findById(req.session.user).catch((err) =>
        console.log(err)
      );
      if (user) {
        return res.status(200).json({
          name: user.name,
          userId: user.id,
          bedTime: user.bedTime,
        });
      }
    }
    return res.status(404).json({
      message: "User not found.",
    });
  }
}

export const userController = new userMethods();
