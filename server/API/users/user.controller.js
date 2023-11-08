import { User } from "./user.modal.js";
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
        console.log("sign up successful");
        return res.status(200).json({
          userId:user.id,
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

  //logout
  logOut(req, res) {
    req.session.destroy();
    console.log(req.session);
    return res.status(200).json({
      message: "log out successfull",
    });
  }
}

export const userController = new userMethods();
