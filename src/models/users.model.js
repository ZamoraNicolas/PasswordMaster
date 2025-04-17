import db from '../db/conecction.js'

const GetUser = async() => {
    try {
        const result = await db.query("SELECT * FROM users")
        return result.rows;
    } catch (error) {
        console.log("Something went wrong", error)   
    }
}

const CreateUSer = async({UserName, Password, Create_Date})=>{
    try {
            await db.query("INSERT INTO users (username, password, created_at) VALUES ($1, $2, $3)",
            [UserName, Password, Create_Date]
            )
    } catch (error) {
        console.log("Something went wrong", error)
    }
}
export default {
    GetUser,
    CreateUSer
};