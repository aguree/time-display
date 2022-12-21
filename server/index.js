const express = require('express');
const { resolve } = require('path');
const app = express();

app.use(express.static(resolve('./build')));

app.get('/', (req, res) => {
    res.sendFile(resolve('./build/index.html'));
});

app.listen(80);
