import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireSignIn = async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
  
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Authorization token missing or invalid" });
      }
  
      const token = req.headers.authorization?.split(" ")[1];
      const decode = JWT.verify(token, process.env.JWT_SECRET);
  
      req.user = decode;
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "Invalid or expired token" });
    }
  };
  

// Middleware to check if the user has admin privileges
export const isAdmin = async (req, res, next) => {
    try {
      if (!req.user || !req.user._id) {
        return res.status(401).json({ message: "Unauthorized request" });
      }
  
      const user = await userModel.findById(req.user._id);
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      if (user.role !== 1) {
        return res.status(403).json({ message: "Access denied, not admin" });
      }
  
      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error in admin middleware" });
    }
  };
  


