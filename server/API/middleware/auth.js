export function validate(req, res, next) {
  console.log("validating user..");
  if (req.session.user) {
    return res.status(405).json({
      message: "user already sign in",
    });
  }
  next();
}
