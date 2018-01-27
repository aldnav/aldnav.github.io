#!/usr/bin/env node
const express = require('express');
const app = express();
const port = process.env.A_PORT || 3000;

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.use('/static', express.static(__dirname + '/public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
