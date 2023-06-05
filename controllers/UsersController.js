import { UserSchema } from "../models/PatientSchema.js";
//for login
export const getUserController = async (req, res) => {
  try {
    const users = await UserSchema.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//may not need, for register new user
export const postUserController = async (req, res) => {
  const user = req.body;
  const newUser = new UserSchema(user);
  try {
    await newUser.save();
    res.send(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
