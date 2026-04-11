import {User} from '../models/user_models.js';

export const getUsers = async (req,res,next) => {
    try{
        const users = await User.find();

        res.status(200).json({
            success: true,
            data: users
        });
    }catch(error){
        next(error);
    }
}

export const getUserById = async (req, res, next) => {
    try{
        const userById = await User.findById(req.params.id).select('-password');

        if(!userById){
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({
            success: true,
            data: userById
        });
    }catch(error){
        next(error);
    }
}

export const DeleteUser = async (req, res, next) => {
    try{
        const deluser = await User.findByIdAndDelete(req.params.id);

        if(!deluser){
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({
            success : true,
            message : "User deleted successfully",
            data: deluser
        });

    }catch(error){
        next(error);
    }
}