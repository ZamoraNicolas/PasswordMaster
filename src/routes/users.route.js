import express from 'express'
import contorller from '../controllers/users.controller.js'

const router = express.Router();

router.get('/', contorller.GetUsers);

export default router;