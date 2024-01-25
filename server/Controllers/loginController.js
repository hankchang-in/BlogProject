const { response } = require('express');
const Users = require('../Models/User')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')
const Token = require('../Models/token')

dotenv.config();

module.exports.postLogin = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await Users.findOne({ username:username });
    console.log(user)
      if (!user) {
        return res.status(400).json({ msg: "User not found!!" });
      }
  
      const authorization = await bcrypt.compare(password, user.password);
  
      if (authorization) {
        const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '15m' });
        const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);
  
        const newToken = new Token({ token: refreshToken });
        await newToken.save();
  
        return res.status(200).json({
          accessToken: accessToken,
          refreshToken: refreshToken,
          username: user.username,
          name: user.name,
        });
      } else {
        return res.status(400).json({ msg: "Password does not match!!" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Error while login!! Please try again" });
    }
  };


//password and email :vishal gusain, vishugusain221@gmail.com, vishugusain2005