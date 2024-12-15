import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use('/animals', AnimalsController);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});