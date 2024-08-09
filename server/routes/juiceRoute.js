import express from 'express'
import { createJuice, deleteJuice, getAllJuices, getSingleJuice, updateJuice } from '../controllers/juiceController.js'
import singleUpload from '../middlewares/multer.js'
import { authMiddleware, authorizeAdmin } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/create',authMiddleware,authorizeAdmin,singleUpload,createJuice)

router.get('/getjuice',getAllJuices)

router.get('/single/:id',getSingleJuice)

router.put('/updatejuice/:id',authMiddleware,authorizeAdmin,singleUpload,updateJuice)

router.delete('/deletejuice/:id',authMiddleware,authorizeAdmin,deleteJuice)


export default router