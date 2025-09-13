import express from 'express';

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send("api is working")
})

app.listen(5002 , () => {
    console.log("server is running port 5002")
})