import db from '../db/conecction.js'

const GetUser = async() => {
    try {
        const result = await db.query("SELECT * FROM users")
        return result.rows;
    } catch (error) {
        console.log("Something went wrong", error)   
    }
}

export default {
    GetUser
};