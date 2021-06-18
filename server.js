const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const { db } = require('./db')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.use((err, req, res, next) => {
    console.error(err, typeof next);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.')
});

async function startServer() {
    try {
        app.listen(PORT, () => 
        console.log (
            `Listening on port ${PORT}
            http://localhost:${PORT}/`
        ))
    }
    catch (err) {
        console.error(err);
    }
};

startServer();

