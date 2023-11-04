import { User } from "../../../modal/user.modal.js";

class userController {
  constructor() {}
  //create new user to data base
  async createUser(req, res) {
    const user = await User.create({
      name: "ankur",
      email: "ankurbhati@gmail.com",
      password: "abcd12345",
    }).catch((err) => console.log(err));

    return res.status(200).send({
      user: user._id,
      message: "user created successfully",
    });
  }
}

export const userControllerMethods = new userController();
