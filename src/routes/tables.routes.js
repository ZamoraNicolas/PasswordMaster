import contorller from '../controllers/tables.controller.js'
import express from 'express'

const routesTables = express.Router();

routesTables.delete('/dropTableUser', contorller.dropTableUser)
routesTables.post('/createTableUsers',contorller.createTableUsers)

export default routesTables