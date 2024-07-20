import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const test = (req, res) => {
    res.json({
        msg: "api"
    })
};

export const updateUser = async (req, res, next) => {
    console.log(req.user, "here", req)
    if (req.user.id !== req.params.id) {
        return next(errorHandler(401, "You can update only your account!"))
    }

    try {
        if (!!req.body.newPassword ^ !!req.body.password) {
            return next(errorHandler(400, "Please enter both old and new Password!"))
        }
        if (req.body.newPassword && req.body.password) {
            const user = await User.findOne({ _id: req.user.id })
            const validPassword = bcryptjs.compareSync(req.body.password, user.password);
            if (!validPassword)
                return next(errorHandler(400, "Incorrect Password!"))
            req.body.password = bcryptjs.hashSync(req.body.newPassword, 10) || user.password;
            console.log(user.password)
        }
        console.log(req.body)
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password || undefined,
                    profilePicture: req.body.profilePicture,
                }
            },
            { new: true }
        );
        const { password, ...rest } = updatedUser._doc;
        res.status(200).json({ ...rest, success: true })
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
        return next(errorHandler(401, "You can delete only your account!"))
    }
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'User has been deleted...', success: true })
    } catch (error) {
        next(error)
    }
}