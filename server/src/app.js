import express from "express";
import userRouter from "./routes/user.route.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import authRouter from "./routes/auth.route.js";

const app = express();
 

app.use(express.json());
app.use("/api/v1/usersRouter", userRouter);
app.use("/api/v1/subscription", subscriptionRouter);
app.use("/api/v1/auth", authRouter);
app

app.get("/", (req, res) => {
            res.send("Welcome to the User Authentication API");

        });    
        
app.get("/name", (req, res) => {
            res.send("Krishnakumar M");
        });


export default app;

