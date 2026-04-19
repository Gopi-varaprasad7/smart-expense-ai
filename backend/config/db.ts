import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log('db connected');
  } catch (error) {
    console.error('❌ DB connection failed:', error);
    process.exit(1);
  }
};

export default connectDb;
