import express from 'express'
import { ChangePassword, getMyProfile, Login, logoutUser, register, updateUser } from '../controllers/userController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/register',register)

router.post('/login',Login)

router.get('/me',authMiddleware,getMyProfile)

router.put('/update',authMiddleware,updateUser)

router.put('/changepassword',authMiddleware,ChangePassword)

router.get('/logout',logoutUser)


export default router