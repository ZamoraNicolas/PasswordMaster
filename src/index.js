import dotenv from 'dotenv';
import express from 'express'
import cors from 'cors'
import UserRoutes from './routes/users.route.js'
import TablesRoutes from './routes/tables.routes.js'

dotenv.config();

const Port = process.env.PORT || 4000;
const app = express()
app.use(express.json());
app.use(cors());

//Users Routes
app.use('/Users', UserRoutes);

//Tables Routes
app.use('/Tables', TablesRoutes)

app.listen(Port , () => {
    console.log('The port is running right on port',Port)
})

