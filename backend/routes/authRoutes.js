import express from 'express';
import { RegisterController, LoginController, TestController } from '../controller/authController.js';
// import { requireSignIn, isAdmin } from '../middleware/authMiddleware.js';





const router = express.Router();


router.post('/register',RegisterController);

router.post('/login', LoginController);


export default router;
