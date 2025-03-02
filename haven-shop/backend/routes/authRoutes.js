import express from 'express';
import { loginUser, registerUser, getUserProfile, updateUser } from '../controllers/authController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/:id', protect, admin, updateUser);
router.get('/profile', protect, getUserProfile);

export default router;