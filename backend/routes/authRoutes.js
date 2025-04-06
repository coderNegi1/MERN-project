import express from 'express';
import { RegisterController, LoginController, TestController, ForgotPasswordController } from '../controller/authController.js';
import { requireSignIn, isAdmin } from '../middleware/authMiddleware.js';





const router = express.Router();

// Register route
router.post('/register',RegisterController);

// Login Route (Public)
router.post('/login', LoginController);

router.get('/test', requireSignIn, isAdmin, TestController);


// forgot password route
router.post('/forgotpass', ForgotPasswordController);

//protected User route auth
router.get('/user-auth',requireSignIn,(req,res) =>{
    res.status(200).send({ok:true});
});


//pretected adimn route auth
router.get('/admin-auth',requireSignIn, isAdmin,(req,res) =>{
    res.status(200).send({ok:true});
});

export default router;
