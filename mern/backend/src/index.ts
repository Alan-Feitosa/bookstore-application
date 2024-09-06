import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 

app.use(cors());
app.use(express.json());

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch(err =>{
    console.log('Erro ao conectar ao MongoDB: ', err);
});

app.listen(PORT, () => {
    console.log(`Server in use on port ${PORT}`)
});