import express from 'express';
import { RegisterController, LoginController, TestController, ForgotPasswordController } from '../controller/authController.js';
import { requireSignIn, isAdmin } from '../middleware/authMiddleware.js';





const router = express.Router();

// Register route
router.post('/register',RegisterController);

// Login Route (Public)
router.post('/login', LoginController);

// Test Route (Protected - Only Admin Access)
router.get('/test', requireSignIn, isAdmin, TestController);

// forgot password route
router.post('/forgotpass', ForgotPasswordController);

export default router;
