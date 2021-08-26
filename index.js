import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import './node_modules/dotenv/config.js';

import todoroute from './routes/todo.route.js';
import userroute from './routes/user.route.js';
const app = express();

app.use(express.json());
app.use(cors());

app.use("/", todoroute);
app.use("/user", userroute);

const MONGO = process.env.MONGO_URI;
const PORT = process.env.PORT;

app.listen(PORT);

mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log(`Database Connected\nServer started on ${PORT}`)
}).catch((err) => {
    console.log(err)
})