const { Users } = require("../models");

const bcrypt = require("bcrypt");

const mailer = require('nodemailer');

const { sign } = require("jsonwebtoken");

const transporter = mailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'baseapp12@gmail.com',
    pass: 'baseapp@Account'
  }
});

exports.getUser = async (req, res) => {
  const listOfUsers = await Users.findAll();
  res.json(listOfUsers);
};

exports.registerUser = async (req, res) => {
  const { name, phoneNumber, address, username, password } = req.body;
  const user = await Users.findOne({ where: { username: username } });
  if (user) {
    res
      .status(403)
      .json({ error: true, message: `Username ${username} already exists` });
  } else {
    bcrypt.hash(password, 10).then((hash) => {
      Users.create({
        name: name,
        username: username,
        phoneNumber: phoneNumber,
        address: address,
        password: hash,
      });
      res.status(200).json("Successfully Registered User!!");
    });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username: username } });

  if (!user) {
    res.status(404).json({ error: true, message: "User Doesnot Exist" });
  } else {
    bcrypt.compare(password, user?.password).then((match) => {
      if (!match) {
        res.status(500).json({
          error: true,
          message: "Wrong username and password Combination",
        });
      } else {
        const accessToken = sign(
          { username: user.username, id: user.id },
          "topsecret"
        );
        res
          .status(200)
          .json({ success: true, data: { token: accessToken, id: user.id } });
      }
    });
  }
};

exports.forgetPassword = async (req, res) => {
  const username = req.params.username;
  const user = await Users.findOne({ where: { username: username } });

  if (!user) {
    res.status(404).json({ error: true, message: "User Does not Exist" });
  } else {
      const mailOptions = {
        from: 'baseapp12@gmail.com',
        to: `${user?.username}`,
        subject: 'Reset Password on your BaseApp account',
        text: `Click on the following link to reset your password: http://localhost:3000/reset-${user?.id}`
      }
      transporter.sendMail (mailOptions, function (error, info)
      {
        if(error) {
          res.status(500).json({error: true, message: `Could not send email to username: ${username}`})
        }else {
          res.status(200).json({success: true, message: `An email has been sent to username: ${username}`})
        }
      })
  }
}

exports.resetPassword = async (req, res) => {
  const id = req.params.id;
  const {password} = req.body;
  const user = await Users.findByPk(id);

  if(!user) {
    res.status(404).json({error: true, message: 'User not found!!'})
  } else {
    bcrypt.hash(password, 10).then((hash) => {
      Users.update({ password: hash  }, { where: { id: user?.id } });
      res.status(200).json({success : true , message: "Successfully Reset your password!!"});
    });
  }
}