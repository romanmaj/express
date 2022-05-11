import express from 'express'
import { auth } from '../middleware/authMiddleware'
import AuthController from '../controllers/auth.controller'

const router = express.Router()

router.post('/api/registration', AuthController.createUser)
router.post('/api/login', auth, AuthController.login)

export { router as authRouter }