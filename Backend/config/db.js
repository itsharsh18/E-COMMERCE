import mongoose from "mongoose";

const connectDb = async () =>{
try {
   await mongoose.connect('mongodb+srv://itsharsh:Harsh2003@cluster0.la5sgs1.mongodb.net/AMAZON-CLONE')
   console.log(mongoose.connection.host);
} catch (error) {
    console.log(error);
}
}

export default connectDb;