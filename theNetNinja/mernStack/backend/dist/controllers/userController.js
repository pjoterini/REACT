import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
const createToken = (_id) => {
    return jwt.sign({ _id: _id }, process.env.SECRET, {
        expiresIn: "3d",
    });
};
// LOGIN
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);
        // create token
        const token = createToken(user._id);
        res.status(200).json({ email, token });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// SIGNUP
export const signupUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.signup(email, password);
        // create token
        const token = createToken(user._id);
        res.status(200).json({ email, token });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
//# sourceMappingURL=userController.js.map