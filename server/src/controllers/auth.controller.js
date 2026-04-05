import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import {JWT_SECRET, JWT_EXPIRES_IN} from '../config/env.js';
import {User} from '../models/user_models.js';

export const SignUp = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try{
        const {name, email, password} = req.body;

        //CHECK IF USER ALREADY EXISTS
        const existingUser = await User.findOne({email});

        if(existingUser){
            const error = new Error('User already exists');
            error.statusCode = 409;
            throw error;
            
        }

        //HASH PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hasshedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create([{name, email, password: hasshedPassword}], {session});
        const token = jwt.sign({userId : newUser[0]._id}, JWT_SECRET, {expiresIn : JWT_EXPIRES_IN});
        
        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success : true,
            message : 'User created successfully',
            data : {
                token,
                user : newUser[0],
            }  
        });

    }catch(error){
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}

export default {SignUp};
