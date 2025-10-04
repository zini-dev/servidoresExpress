const express = require("express");

const app = express();

const PORT = 80;

app.listen(PORT, () => {
    console.log(`O Sistema de Pedidos está rodando na porta ${PORT}`)
})