import { Router } from "express";
import {getUsers, getUserById, DeleteUser} from '../controllers/user.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const userRouter = Router();

userRouter.get("/", getUsers);


userRouter.get("/:id", authMiddleware, getUserById);

userRouter.delete("/:id", authMiddleware, DeleteUser);

userRouter.post("/", (req,res) => {
    res.send({title: 'Welcome to the User Router POST'});
});

export default userRouter;
