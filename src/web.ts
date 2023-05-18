import express from 'express';
export default function createServer() {
    const app = express();

    app.get('/seleccion_citas/:usuario/:administrador', (req, res) => {
        res.send()
    })
    
    return app
}