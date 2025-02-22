import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);  // Ensure this route matches the one in your frontend
router.post('/login', loginUser);

export default router;
