import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';


const app = express();
dotenv.config();

app.use('/posts', postRoutes);

// bodyParser setup
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// cors
app.use(cors());
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('<h1>Hello to EMG App<h1>');
    res.end()
}); // connected to heroku route

// const CONNECTION_URL = 'mongodb+srv://EmgNew:emgpassword.@cluster0.doo3b.mongodb.net/?retryWrites=true&w=majority';
// const CONNECTION_URL = 'mongodb+srv://EmgNew:emgpassword.@cluster0.doo3b.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);