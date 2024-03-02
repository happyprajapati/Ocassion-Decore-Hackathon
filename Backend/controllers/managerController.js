const bcrypt = require("bcrypt");
const User = require("./../models/user");
// const Event = require("./../models/event");
const Place = require("./../models/place");
const SliderImg = require("./../models/sliderimg");
const nodemailer = require("nodemailer");

const mailOptions = {
  from:{
    name:"Happy Prajapati",
    address: process.env.USER
  },
  to: ["jokerbaba2468@gmail.com"],
  subject: "Confirmation of Room Allocation - Universal Workflow Management",
  html:`
  <p>Dear Joker,</p>
  <p>I hope this email finds you well. We are delighted to inform you that your application for accommodation has been successful, and we are pleased to offer you a room at uwm. Congratulations!</p>
  <p>Your room has been allocated, and we are looking forward to having you as a resident. Please find below the details of your allocated room:</p>
  <ul>
  <li>Room Number: 10</li>
  <li>Room Type: AC</li>
  <li>Food: Included</li>
  <li>Duration: 6 Months</li>
  </ul>
  <p>To confirm your acceptance of the allocated room, please pay allocation fee within 48 hours, QR code for payment is given below. Should you have any questions or require further assistance, do not hesitate to contact us at +91 1234567890.</p>
  <p>Once again, congratulations on your successful room allocation! We look forward to welcoming you to our accommodation facility and wish you a pleasant stay.</p>
  <p>Best regards,</p>
  <p>Happy Prajapati</p>
  <p>Admin</p>
  <p>Universal Worflow Management</p>`
}

const sendMail = async (transporter, mailOptions) => {
  try {
    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (e) {
    console.log(e);
  }
}

// sendMail(transporter, mailOptions);

const createManager = async (req, res) => {
  try {
    const error = validationResult(req);
    if (error.isEmpty()) {
      const { name, email, password, contact } = req.body;
      const checkUser = await User.findOne({ email: email });
      if (checkUser) {
        return res
          .status(200)
          .json({ success: false, data: { message: "User Already Exists." } });
      }
      const salt = 10;
      const hashPass = await bcrypt.hash(password, salt);

      const user = new User({
        name,
        email,
        password: hashPass,
        contact,
        role: 2,
      });
      await user
        .save()
        .then(() => {
          return res
            .status(200)
            .json({
              success: true,
              data: { message: "User Created Successfully." },
            });
        })
        .catch((e) => {
          return res
            .status(200)
            .json({
              success: false,
              data: { message: "User Not Created.", error: e },
            });
        });
    }
    return res
      .status(422)
      .json({ success: false, data: { error: error.array() } });
  } catch (e) {
    return res.json({ success: false, data: { error: e } });
  }
};

// const createEvent = async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const event = new Event({
//       title,
//       description,
//     });
//     await event
//       .save()
//       .then(() => {
//         return res
//           .status(200)
//           .json({
//             success: true,
//             data: { message: "Event Created Successfully." },
//           });
//       })
//       .catch((e) => {
//         return res
//           .status(200)
//           .json({
//             success: false,
//             data: { message: "Event Not Created.", error: e },
//           });
//       });
//   } catch (e) {
//     return res.json({ success: false, data: { error: e } });
//   }
// };

const addsliderimg = async (req, res) => {
  try {
    const sliderImg = new SliderImg({
      image:req.file.originalname,
    });
    await sliderImg.save()
      .then(() => {
        return res
          .status(200)
          .json({
            success: true,
            data: { message: "Image Added Successfully." },
          });
      })
      .catch((e) => {
        return res
          .status(200)
          .json({
            success: false,
            data: { message: "Image Not Added.", error: e },
          });
      });
  } catch (e) {
    return res.status(200).json({ success: false, data: { error: e } });
  }
};

const getUsers = async (req, res) => {
  const users = await User.find();
  return res.json({ success: true, data: users });
}

const getPlaceReq = async (req, res) => {
  try {
    const places = await Place.find({where:{status:"pending"}});
  return res.json({ success: true, data: places });
  } catch (error) {
    return res.status(200).json({ success: false, data: { error: error } });
  }
}

const acceptPlaceReq = async (req, res) => {
  try {
    const {id} = req.params;
    await Place.update({id},{status:"accepted"});
    return res.status(200).json({ success: true, data: { message: "Request Accepted Successfully." } });
  } catch (error) {
    return res.status(200).json({ success: false, data: { error: error } });
  }
}

module.exports = { createManager, addsliderimg, getUsers, getPlaceReq, acceptPlaceReq };