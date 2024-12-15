import express from 'express';
import bodyParser from 'body-parser';
import AnimalsController from './controllers/AnimalController.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/animals', AnimalsController);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
