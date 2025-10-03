// Importa módulo EXPRESS para o nosso JS
const express = require("express");

// Cria instância do EXPRESS
const app = express();

// Define número da porta
const PORT = 8000;

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`O Servidor de usuários está rodando na porta ${PORT}`);
});