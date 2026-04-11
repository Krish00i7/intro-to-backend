import {Router} from "express";
import {SignUp, SignIn} from "../controllers/auth.controller.js"
import { authMiddleware } from "../middlewares/auth.middleware.js";

const authRouter = Router();

authRouter.post('/sign-up', SignUp );

authRouter.post('/sign-in', authMiddleware, SignIn );

authRouter.post('/sign-out', authMiddleware, (req,res) => res.send({title : 'Successfully signed out'}));

export default authRouter;

// authRouter.post('/forgot-password', (req,res) => res.send({title : 'Successfully sent forgot password email'}));

// authRouter.post('/reset-password', (req,res) => res.send({title : 'Successfully reset password'}));

// authRouter.post('/change-password', (req,res) => res.send({title : 'Successfully changed password'}));

// authRouter.post('/verify-email', (req,res) => res.send({title : 'Successfully sent email verification email'}));

// authRouter.post('/confirm-email', (req,res) => res.send({title : 'Successfully confirmed email'}));

// authRouter.post('/resend-verification-email', (req,res) => res.send({title : 'Successfully resent email verification email'}));

// authRouter.post('/refresh-token', (req,res) => res.send({title : 'Successfully refreshed token'}));

// authRouter.post('/revoke-token', (req,res) => res.send({title : 'Successfully revoked token'}));

// authRouter.post('/google-sign-in', (req,res) => res.send({title : 'Successfully signed in with Google'}));

// authRouter.post('/facebook-sign-in', (req,res) => res.send({title : 'Successfully signed in with Facebook'}));

// authRouter.post('/github-sign-in', (req,res) => res.send({title : 'Successfully signed in with GitHub'}));

// authRouter.post('/twitter-sign-in', (req,res) => res.send({title : 'Successfully signed in with Twitter'}));

// authRouter.post('/linkedin-sign-in', (req,res) => res.send({title : 'Successfully signed in with LinkedIn'}));

// authRouter.post('/apple-sign-in', (req,res) => res.send({title : 'Successfully signed in with Apple'}));

// authRouter.post('/microsoft-sign-in', (req,res) => res.send({title : 'Successfully signed in with Microsoft'}));
// authRouter.post('/yahoo-sign-in', (req,res) => res.send({title : 'Successfully signed in with Yahoo'}));
// authRouter.post('/amazon-sign-in', (req,res) => res.send({title : 'Successfully signed in with Amazon'}));