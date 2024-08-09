import mongoose from "mongoose"

const ConnectDB =async()=>{
  try {
     await mongoose.connect(process.env.MONGO_URL)
     console.log('Database Connected Successfully')
  } catch (error) {
    console.log('Error while Connecting database',error)
  }
}


export default ConnectDB;

