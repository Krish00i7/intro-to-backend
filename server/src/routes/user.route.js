import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req,res) => {
    res.send({title: 'Welcome to the User Router'});
});


userRouter.get("/:id", (req,res) => {
    res.send({title: `Welcome to the User Router ID`});
});

userRouter.post("/", (req,res) => {
    res.send({title: 'Welcome to the User Router POST'});
})
export default userRouter;
