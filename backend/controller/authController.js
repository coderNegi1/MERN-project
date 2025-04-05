import userModel from "../models/userModel.js";
import { hashPassword } from '../helpers/authHelpers.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';




// REGISTER CONTROLLER ---> 
export const RegisterController = async (req, res) => {
    try {
        const { name, email, password, phone, address, answer } = req.body;

        if (!name || !email || !password || !phone || !address || !answer) {
            return res.status(422).json({ error: "Please fill all fields" });
        }

        const userExist = await userModel.findOne({ email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exists" });
        }

        const hashedPassword = await hashPassword(password);

        const user = new userModel({
            name,
            email,
            password: hashedPassword,
            phone,
            address,
            answer,
        });

        const userRegister = await user.save();
        return res.status(201).json({ 
            success: true,  
            message: "User registered successfully", 
            user: userRegister 
          });
          

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
};


// LOGIN CONTROLLER --->
export const LoginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if all fields are provided
        if (!email || !password) {
            return res.status(400).json({ error: "Please provide all fields" });
        }

        // Find user by email
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        return res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                answer: user.answer
            },
            token
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};



// TEST CONTROLLER ---> 
export const TestController = (req, res) => {
    try {
        res.send("Protected Route");
    } catch (error) {
        console.log(error);
        res.send({ error });
    }
};


//FORGOT PASSWORD API ---->
export const ForgotPasswordController = async (req,res) => {
    try{
        const {email, answer, newPassword} = req.body;
        if (!email){
            res.status(400).send({message: "email is required"});
        }
        if (!newPassword){
            res.status(400).send({message: "password is required"});
        }
        if (!answer){
            res.status(400).send({message: "answer is required"});
        }
        //check
        const user = await userModel.findOne({email, answer});
    
        //validation
        if(!user){
             return res.status(400).send({
                success:false,
                message:"wrong email or answer"
             });
        }
        const hashed = await hashPassword(newPassword);
        await userModel.findByIdAndUpdate(user._id,{password:hashed});
        res.status(200).send({
            success:true,
            message:"password reset succefully"
        });
        
    } catch(err){
        console.log(err);
        res.status(500).send({
            success:false,
            message:"something went wrong"
        });
    }
    }