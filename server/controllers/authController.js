import { comparePassword, hashPassword } from "../helpers/authHepler.js";
import ForeignerModel from "../models/ForeignerModel.js";
import user from "../models/user.js";
import JWT from "jsonwebtoken";

//register foreigner
export const registerController = async (req, res) => {
  try {
    const { name, email, country, phone, password } = req.body;

    //check user
    const existingUser = await ForeignerModel.findOne({ email });
    //if existing user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already registered, please login",
      });
    }

    //validations
    if (!name) {
      return res.send({ message: "Name is required" });
    }
    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!country) {
      return res.send({ message: "Country is required" });
    }
    if (!phone) {
      return res.send({ message: "Contact number is required" });
    }
    if (!password) {
      return res.send({ message: "Password is required" });
    }

    //register foreigner
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new ForeignerModel({
      name,
      email,
      country,
      phone,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "Registered Successfully",
      user,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Error occured in registration",
    });
  }
};


//registration for any user
export const userRegisterController = async(req,res) =>{
  try {
    const { name, email, password } = req.body;

    //check user
    const existingUser = await user.findOne({ email });
    //if existing user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already registered, please login",
      });
    }

    //validations
    if (!name) {
      return res.send({ message: "Name is required" });
    }
    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!password) {
      return res.send({ message: "Password is required" });
    }

    //register foreigner
    const hashedPassword = await hashPassword(password);
    //save
    const newUser = await new user({
      name,
      email,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "Registered Successfully",
      user,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Error occured in registration",
      e
    });
  }
}

//login foreigner
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await ForeignerModel.findOne({ email });
    if (!user) {
      res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      res.status(200).send({
        success: false,
        message: "Invalid password",
      });
    }
    //generate token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login Successful",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        country: user.country,
      },
      token,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      e,
    });
  }
};

//login for any user
export const userLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const member = await user.findOne({ email });
    if (!member) {
      res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }
    const match = await comparePassword(password, member.password);
    if (!match) {
      res.status(200).send({
        success: false,
        message: "Invalid password",
      });
    }
    //generate token
    const token = await JWT.sign({ _id: member._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login Successful",
      member,
      token,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      e,
    });
  }
};



// forgot password controller
export const forgotPasswordContoller = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    if (!email) {
      res.status(400),
        send({
          message: "Email is required",
        });
    }
    if (!newPassword) {
      res.status(400),
        send({
          message: "New Password is required",
        });
    }
    //check user
    const user = await ForeignerModel.findOne({ email });
    //validation
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "Email is not registered",
      });
    }
    const hashed = await hashPassword(newPassword);
    await ForeignerModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "password reset successful",
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Message went wrong",
      e,
    });
  }
};

export const userForgotPasswordController = async(req,res) =>{
  try {
    const { email, newPassword } = req.body;
    if (!email) {
      res.status(400).
        send({
          message: "Email is required",
        });
    }
    if (!newPassword) {
      res.status(400).
        send({
          message: "New Password is required",
        });
    }
    //check user
    const member = await user.findOne({ email });
    console.log(member);
    //validation
    if (!member) {
      return res.status(400).send({
        success: false,
        message: "Email is not registered",
      });
    }
    const hashed = await hashPassword(newPassword);
    await user.findByIdAndUpdate(member._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "password reset successful",
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Message went wrong",
      e,
    });
  }
}
