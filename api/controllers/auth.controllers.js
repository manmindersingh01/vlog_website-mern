import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  //console.log(username);
  if (!username || !email || !password || username == '' || email == ' ' || password == '') {
    next(errorHandler(400, 'all fields are required'))
  }
  const hashPass = bcryptjs.hashSync(password, 10);

  const newUser = new User(
    {
      username,
      email,
      password: hashPass
    }
  )
  try {
    await newUser.save();
    res.json({
      msg: "User created"

    })
  } catch (error) {
    next(error);
  }


}

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  alert(email);

}