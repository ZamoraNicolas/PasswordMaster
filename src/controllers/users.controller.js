import users_model from '../models/users.model.js'

const GetUsers =  async (req , res) => {
    try {
        const getusers = await users_model.GetUser()
        res.status(200).json({
            message: "This was the result",
            data: getusers
        })
        console.log(getusers)
    } catch (error) {
        res.status(404).send("Something where wrong searching")
    }
}

export default {
    GetUsers
}