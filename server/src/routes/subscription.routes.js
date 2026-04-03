import {Router} from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req,res) => {
    res.send({title: 'Subscription details'});
});

export default subscriptionRouter;