import { User } from "../users/user.modal.js";

export async function validate(req, res, next) {


  if (req.session.user) {
    const user = await User.findById(req.session.user);

    return res.status(405).json({
      logedin: true,
      message: "user already sign in",
      name: user.name,
      bedTime: user.bedTime,
      userId:user.id
    });
  }
  next();
}
