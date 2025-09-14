import express from 'express';
import { configDotenv } from 'dotenv';
import cors from 'cors';

const app = express();
configDotenv();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send("api is working")
})

app.listen(5002 , () => {
    console.log("server is running port 5002")
})