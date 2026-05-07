import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


// ================= REGISTER =================
export const register = async (req, res) => {
    try {

        const { fullname, email, password } = req.body;

        // validation
        if (!fullname || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }

        // check existing user
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
                success: false
            });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create user
        const user = await User.create({
            fullname,
            email,
            password: hashedPassword,
            profilePhoto: "https://www.loremfaces.net/96/id/1.jpg"
        });

        return res.status(201).json({
            message: "Account created successfully",
            success: true,
            user
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: error.message,
            success: false
        });
    }
};



// ================= LOGIN =================
export const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        // validation
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }

        // find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Incorrect email or password",
                success: false
            });
        }

        // compare password
        const isPasswordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordMatch) {
            return res.status(401).json({
                message: "Incorrect email or password",
                success: false
            });
        }

        // generate token
        const token = jwt.sign(
            { userId: user._id },
            process.env.SECRET_KEY,
            { expiresIn: "1d" }
        );

        return res
            .status(200)
            .cookie("token", token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
                sameSite: "strict"
            })
            .json({
                message: `${user.fullname} logged in successfully`,
                success: true,
                token,
                user
            });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: error.message,
            success: false
        });
    }
};