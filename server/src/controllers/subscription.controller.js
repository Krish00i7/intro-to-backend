import Subscription from '../models/subscription_model.js';

export const createSubscription = async (req , res,next) => {
    try{
        const subscription = await Subscription.create({
    ...req.body,
    user: req.user._id // ✅ correct
});

        res.status(201).json({
            success : true,
            data : subscription
        });
    }catch(e){
        next(e);
    }
}