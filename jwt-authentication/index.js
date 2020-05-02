const express = require('express');
const CONFIG = require('./configuration/config.json');
const JWT = require('./common/jwt')
const AUTH = require('./common/authentication')

const app = express();

app.listen(CONFIG.PORT);

app.get('/token', (req, res) => {
    const token = JWT.create({ name: 'Donatello' });
    res.json({ token });
})

app.post('/secure', AUTH.authenticate, (req, res) => {
    res.json({ message: `You are authenticated ${req.data.name}` });
})