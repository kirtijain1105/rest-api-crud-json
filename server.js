// modules =================================================
const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser=require('body-parser');
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const routes = require('./routes/routes.js')(app,fs);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));