import mongoose from "mongoose";

const connectDB = async () =>  {

    try {
        const conecct = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Database connected:", conecct.connection.host, conecct.connection.name)
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

}

export default connectDB;