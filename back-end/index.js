const express = require("express");
const mongo = require("mongoose");
const bodyParser = require("body-parser");

const api = express();
const rotas = require("./routes/rotas");

api.use(bodyParser.json());

const config = require("./config/config");

mongo.connect(config.strConnMongoLocal);

const db = mongo.connection;

const port = process.env.PORT || 16000;

api.listen(port, () => {
    console.log(`WebService rodando na porta: ${port}`);
});

api.use("/api", rotas);

module.exports = api