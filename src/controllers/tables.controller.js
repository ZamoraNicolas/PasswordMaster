import db from '../db/conecction.js'

//Queries tables users

const dropTableUser = async(req, res) => {
    try {
        await db.query("DROP TABLE users");
        res.status(200).send("Table deleted sucefully")
    } catch (error) {
        res.send("We couldn't delete the table")
    }
}

const createTableUsers = async(req, res) => {
    try {
        await db.query(`CREATE TABLE users (
            id_user SERIAL PRIMARY KEY, 
            username VARCHAR(30) NOT NULL, 
            password VARCHAR(30) NOT NULL, 
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`);
        res.status(200).send("Table created suceffuly")
    } catch (error) {
        res.status(404).json({
            message:"wasn't possible to created the table",
            Error: error
        })
        console.log(error)
    }
}



export default {
    dropTableUser,
    createTableUsers
}