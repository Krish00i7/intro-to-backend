import { Router } from "express";
import {getUsers, getUserById} from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.get("/", getUsers);


userRouter.get("/:id", getUserById);

userRouter.post("/", (req,res) => {
    res.send({title: 'Welcome to the User Router POST'});
});

export default userRouter;
