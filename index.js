const express = require("express");
const app = express();

// Rota 1 - Página principal
app.get("/", function(req, res) {
    res.send("<h1>Bem-vindo ao meu site!</h1><p>Navegue pelas rotas: /sobre e /contato</p>");
});

// Rota 2 - Sobre
app.get("/sobre", function(req, res) {
    res.send("<h1>Sobre</h1><p>Aplicação Node.js desenvolvida para a disciplina de Desenvolvimento de Software em Nuvem - Unifor.</p>");
});

// Rota 3 - Contato
app.get("/contato", function(req, res) {
    res.send("<h1>Contato</h1><p>Entre em contato pelo e-mail: aluno@unifor.br</p>");
});

app.listen(3000, function(erro) {
    if (erro) {
        console.log("Erro ao iniciar.");
    } else {
        console.log("Servidor Iniciado.");
    }
});
