import express from 'express';
import Contact from '../models/ContactDB.js';

const router = express.Router();

router.get("/services", async (req, res) => {
    try {
        let allservices = await Contact.find()
        res.status(200).send(allservices)
    } catch (error) {
        res.status(400).send("server error")
        console.log(error)
    }
})


router.post("/Addservices", async (req, res) => {
    let {  } = req.body;

    try {
        let allservices = await Contact.find()
        res.status(200).send(allservices)
    } catch (error) {
        res.status(400).send("server error")
        console.log(error)
    }
})

export default router;

