import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

app.get('/',(req,res) => {
    res.status(200).json({message: " backned is running "})
})

app.listen(PORT , () => {
    console.log(`server on port ${PORT}`
    )
})