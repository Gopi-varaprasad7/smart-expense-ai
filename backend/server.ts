import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';
import expenseRoutes from "./routes/expenseRoutes";

dotenv.config();
connectDB();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use("/api/expenses", expenseRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
