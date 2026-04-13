import mongoose from 'mongoose';
import env from 'dotenv';

env.config();

const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log('db connected');
  } catch (error) {
    console.log(error);
  }
};
export default connectDb;