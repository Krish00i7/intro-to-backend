import app from "./app.js";
import connectDB from "./database/database.js";
import dotenv from "dotenv";
import dns from "dns";
import { PORT } from "./config/env.js";
dotenv.config({
    path: ".env"
});

dns.setServers(["1.1.1.1","8.8.8.8"]);

const startServer = async() => {
    try {
        await connectDB();
         
        app.listen(PORT || 8000, () => {
            console.log(`Server is running on port ${PORT || 8000}`);
            console.log(`Server is running in http://localhost:${PORT || 8000}`)
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


