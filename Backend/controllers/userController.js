const bcrypt = require("bcrypt");
const User = require("../models/user");
const Event = require("../models/event");
const Token = require("../models/token");
const { validationResult } = require("express-validator");
const crypto = require("crypto");
const transporter = require("../middlewares/nodemailer");
const salt = 10;

const generateToken = (id) => {
  var token = new Token({
    userId: id,
    token: crypto.randomBytes(16).toString("hex"),
  });
  token.save();
  return token;
};

const createUser = async (req, res) => {
  try {
    const error = validationResult(req);
    if (error.isEmpty()) {
      const { name, email, password, contact, role } = req.body;
      // console.log(req.body);
      const checkUser = await User.findOne({ email: email });
      if (checkUser) {
        return res
          .status(200)
          .json({ success: false, data: { message: "User Already Exists." } });
      }
      const hashPass = await bcrypt.hash(password, salt);

      const user = new User({
        name,
        email,
        password: hashPass,
        contact,
        role,
      });
      await user.save();

      // Create a verification token for this user
      const getUser = await User.findOne({ email: email });
      var token = generateToken(getUser._id);

      const mailOptions = {
        from: {
          name: "Venue Vista",
          address: process.env.USER,
        },
        to: [email],
        subject: "Email varification - Venue Vista",
        html: `
          <p>Hello,</p><p>Please verify your account by clicking the link:</p><a href="http://${req.headers.host}/confirmation/${token.token}">Varify Email</a>`,
      };

      transporter.sendMail(mailOptions, function (error) {
        if (error) {
          return res.json({
            success: false,
            data: { message: `Error Occured : ${error}` },
          });
        } else {
          return res.json({
            success: true,
            data: {
              message: `A verification email has been sent to ${email}.`,
            },
          });
        }
      });
    } else {
      return res
        .status(422)
        .json({ success: false, data: { error: error.array() } });
    }
  } catch (e) {
    return res.status(200).json({ success: false, data: { error: e } });
  }
};

const verifyEmail = async (req, res) => {
  try {
    const token = await Token.findOne({ token: req.params.token });
    if (!token)
      return res.status(400).send({
        message:
          "We were unable to find a valid token. Your token my have expired.",
      });

    // If we found a token, find a matching user
    const user = await User.findOne({ _id: token.userId });
    if (!user)
      return res
        .status(400)
        .send({ message: "We were unable to find a user for this token." });
    if (user.isVerified)
      return res
        .status(400)
        .send({ message: "This user has already been verified." });

    // Verify and save the user
    user.isVerified = true;
    user.save();
    return res
      .status(200)
      .send("The account has been verified. Please log in.");
  } catch (error) {
    return res.send({
      success: false,
      data: { message: `Error Occured : ${error}` },
    });
  }
};

const getEvents = async (req, res) => {
  const events = await Event.find();
  return res.json({ success: true, data: events });
};

// const getOtp = async (req, res) => {
//   try {
//     const { email } = req.body;
//     const user = await User.findOne({ email: email });
//     if (user) {
//       const otp = crypto.randomInt(0, 1000000);
//       const mailOptions = {
//         from: {
//           name: "Universal Workflow Management",
//           address: process.env.USER,
//         },
//         to: [email],
//         subject: "OTP for Reset Password - Universal Workflow Management",
//         html: `
//       <center><p style="font-size:36px">OTP</p><p style="padding: 8px; border:1px solid gray; border-radius: 10px; width:140px; font-size: 28px;">${otp}</p></center>`,
//       };
//       await transporter.sendMail(mailOptions, function (error) {
//         if (error) {
//           return res.json({
//             success: false,
//             data: { message: `Error Occured : ${error}` },
//           });
//         } else {
//           return res.json({
//             success: true,
//             data: { message: "OTP sent", otp: otp },
//           });
//         }
//       });
//     } else {
//       return res.json({
//         success: false,
//         data: { message: "Please enter registerd email." },
//       });
//     }
//   } catch (error) {}
//   return res.json({
//     success: false,
//     data: { message: `Error Occured : ${error}` },
//   });
// };

const sentResetPassToken = async (req, res) => {
  try {
    const { email } = await req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      const token = await generateToken(user._id);
      const mailOptions = {
        from: {
          name: "Venue Vista",
          address: process.env.USER,
        },
        to: [email],
        subject: "Reset Password - Venue Vista",
        html: `
      <p>Hello,</p><p>You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
      'Please click on the following link:</p><a href="http://localhost:5173/login/reset-password/${token.token}">Reset Password</a><p>If you did not request this, please ignore this email and your password will remain unchanged.</p>`,
      };
      transporter.sendMail(mailOptions, function (error) {
        if (error) {
          return res.json({
            success: false,
            data: { message: `Error Occured : ${error}` },
          });
        } else {
          return res.json({
            success: true,
            data: {
              message: `A reset password email has been sent to ${email}.`,
            },
          });
        }
      });
    }
  } catch (error) {
    return res.json({
      success: false,
      data: { message: `Error Occured : ${error}` },
    });
  }
};

const CheckResetEmail = async (req, res) => {
  try {
    const token = req.params.token;
    // console.log(token)
    const checkToken = await Token.findOne({ token });
    if (!checkToken) {
      return res.json({
        success: false,
        data: {
          message:
            "We were unable to find a valid token. Your token may have expired.",
        },
      });
    }
    return res.json({
      success: true,
      data: { message: "Email verified", userId: checkToken.userId },
    });
  } catch (error) {
    return res.json({
      success: false,
      data: { message: `Error Occured : ${error}` },
    });
  }
};

const resetPass = async (req, res) => {
  try {
    const { userId, password } = req.body;
    console.log(userId);
    const hashPass = await bcrypt.hash(password, salt);
    // const user = await User.findOne({ _id: userId });
    await User.updateOne({ _id: userId }, { $set: { password: hashPass } });
    return res.json({
      success: true,
      data: { message: "Password Updated Successfully." },
    });
  } catch (error) {
    return res.send({
      success: false,
      data: { message: `Error Occured : ${error}` },
    });
  }
};

module.exports = {
  createUser,
  verifyEmail,
  getOtp,
  sentResetPassToken,
  CheckResetEmail,
  resetPass,
  getEvents,
};
