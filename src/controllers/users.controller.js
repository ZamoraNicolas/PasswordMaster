import users_model from "../models/users.model.js";

const UserName = req.params("Username");
const Password = req.params("password");

const GetUsers = async (req, res) => {
  try {
    const getusers = await users_model.GetUser();
    res.status(200).json({
      message: "This was the result",
      data: getusers,
    });
    console.log(getusers);
  } catch (error) {
    res.status(404).send("Something where wrong searching");
  }
};

const CreateUser = async (req, res) => {
  try {
    await users_model.CreateUSer(UserName, Password)
    res.status(200).send("User created sucefully")
  } catch (error) {
    res.status(404).send("Wasn't possible tu create the new user")
  }
};

export default {
  GetUsers,
  CreateUser
};
