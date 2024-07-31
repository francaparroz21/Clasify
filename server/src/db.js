import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        //connect to db promise
        await mongoose.connect("mongodb+srv://clasify_user:rn1QlYBjl43s99uF@clasify.bfcanmb.mongodb.net/?retryWrites=true&w=majority&appName=Clasify");
        //db connected
        console.log("db is connected");
    } catch (error) {
        //error
        console.log(error);
    }
}