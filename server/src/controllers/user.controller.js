import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import admin from "firebase-admin";

dotenv.config();

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  projectId: "adscheck-fbad8",
});

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: true, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: true, message: "Invalid password" });
    }

    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN,
      { expiresIn: "48h" }
    );

    return res.status(200).json({
      error: false,
      user: {
        username: user.username,
        email: user.email,
      },
      accessToken,
      message: "Sign-in successful",
    });
  } catch (error) {
    console.error("Error during sign-in:", error);
    return res.status(500).json({ error: true, message: "Server error" });
  }
};

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ error: true, message: "All fields are required" });
    }

    const isUser = await User.findOne({ email });
    if (isUser) {
      return res
        .status(400)
        .json({ error: true, message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashPassword });
    await user.save();

    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN,
      { expiresIn: "48h" }
    );

    return res.status(201).json({
      error: false,
      user: {
        username: user.username,
        email: user.email,
      },
      accessToken,
      message: "Registration successful",
    });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ error: true, message: "Server error" });
  }
};

const getUserList = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching user list:", error);
    return res.status(500).json({ error: true, message: "Server error" });
  }
};

const signinWithGoogle = async (req, res) => {
  const { idToken } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const email = decodedToken.email;

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        username: email.split("@")[0],
        email,
      });
      await user.save();
    }

    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN,
      { expiresIn: "48h" }
    );

    return res.status(200).json({
      uid: decodedToken.uid,
      accessToken,
      user: {
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error verifying Google ID token:", error);
    return res.status(401).json({ error: true, message: "Unauthorized" });
  }
};

export default { getUserList, signin, signup, signinWithGoogle };
