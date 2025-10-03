const express = require("express");

const app = express();

const PORT = 8081;

app.listen(PORT, () => {
    console.log(`O Servidor de Produtos está rodando na porta ${PORT}`)
})