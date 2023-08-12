import mongoose from "mongoose";

let isConnected = false
export const connectToDB = async () => { 
    mongoose.set('strictQuery',true)
    if(isConnected){
        console.log('already connected to mongoDB')
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: 'share_thought',
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        isConnected = true
        console.log('mongoDB is Connected')
    } catch (error) {
        console.log(error)
    }
 }