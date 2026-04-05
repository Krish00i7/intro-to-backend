import mongoose,{ Schema } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minLength: 1,
        },

        password:{
            type: String,
            required: true,
        },

        email:{
            type: String,
            required: true,
            unique: true,
            trim: true,
        }
    },
    {
        timestamps: true
    });


export const User = mongoose.model("User", userSchema);
