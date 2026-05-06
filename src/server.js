import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        nombre: "Juan",
        edad: 25,
        ciudad: "Madrid"
    })
});

export default app;