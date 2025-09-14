import express from 'express';
import { configDotenv } from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/contact.js';

const app = express();
configDotenv();

app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB is connected"))
  .catch((error) => console.log(error, "MongoDB is not connected"));

// Test route
app.get('/', (req, res) => {
  res.send("API is working ✅");
});

// Routes
app.use('/api', router);

app.listen(5002, () => {
  console.log("Server is running on port 5002");
});
