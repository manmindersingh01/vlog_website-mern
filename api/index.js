import express from 'express';
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';


//importing routes
import authRoutes from './routes/auth.route.js'
import userRoutes from './routes/user.route.js'


dotenv.config();
mongoose.connect(process.env.MONGO).then(
  () => {
    console.log("Connected to MongoDB");
  }
).catch(err => {

  console.log(err);
});

app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


app.listen(3000, () => {
  console.log("Server running on port 3000");
})