import express from 'express';
import indexRoutes from './routes/index';

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (req, res) => {
    console.log(':3')
    res.send('Hola mundo')
})

app.use('/api/index', indexRoutes);

app.listen(PORT, () => {
    console.log('El servidor corre en el port ${PORT}')
});