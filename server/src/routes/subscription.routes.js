import {Router} from "express";
import {authMiddleware} from '../middlewares/auth.middleware.js';
import { createSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req,res) => {
    res.send({title: 'Subscription details'});
});

subscriptionRouter.post("/", authMiddleware, createSubscription);

export default subscriptionRouter;