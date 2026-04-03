import app from "./app.js";
import connectDB from "./config/database.js";
import dotenv from "dotenv";
import dns from "dns";

dotenv.config({
    path: ".env"
});

dns.setServers(["1.1.1.1","8.8.8.8"]);

const startServer = async() => {
    try {
         await connectDB();
        console.log("MongoDB URI:", `${process.env.MONGODB_URI}`);


        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT || 8000}`);
            console.log(`Server is running in http://localhost:${process.env.PORT || 8000}`)
        });
       

        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error;
        });

      

    } catch(error){
        console.log("MongoDb connection failed !!! ", error);
    }
}

startServer();


