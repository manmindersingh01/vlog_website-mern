import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  //console.log(username);
  if (!username || !email || !password || username == '' || email == ' ' || password == '') {
    res.status(400).json({
      msg: "Please fill in all fields"
    })
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
    res.status(400).json({
      message: error.message
    })
  }


} 