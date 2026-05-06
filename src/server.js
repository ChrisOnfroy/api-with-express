import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
       user : [
        {   
            id:2,
            nombre: "Juan",
            edad: 25,
            ciudad: "Madrid"
        },
        {   
            id:3,
            nombre: "David",
            edad: 32,
            ciudad: "Valencia"
        },
        {   
            id:5,
            nombre: "Anibal",
            edad: 43,
            ciudad: "Barcelona"
        }
       ]
    })
});

export default app;