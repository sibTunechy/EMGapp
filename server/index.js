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

const host = '0.0.0.0';
const port = process.env.PORT || 5000; // this goes with port and host // got the job done (i)

// app.listen (process.env.PORT || 5000, function() {
//     console.log('Express server listening on port', this.address().port, app.settings.env);
// });

app.listen(port, host, function() {
     console.log('Server started.....')        // got the job done (ii)
})

// var port_number = server.listen(process.env.PORT || 5000);
// app.listen(port_number);


// var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
// var server_host = process.env.YOUR_HOST || '0.0.0.0';
// server.listen(server_port, server_host, function() {
//     console.log('Listening on port....', server_port);
// })

// const {PORT=3000, LOCAL_ADDRESS='0.0.0.0'} = process.env
// server.listen(PORT, LOCAL_ADDRESS, () => {
//     console.log('server listening at', address)
// })

// .listen(process.env.PORT || 5000)  // second .listen

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);