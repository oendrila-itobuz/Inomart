import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './src/config/db-connection.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectDB();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});