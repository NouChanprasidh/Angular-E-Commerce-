import mongoose from 'mongoose';
import { environment } from '../../environments/environment';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(environment.mongoUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}; 