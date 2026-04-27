const express = require("express");
const app = express();

// Rota 1 - Página principal
app.get("/", function(req, res) {
    res.send("<h1>Bem-vindo ao site do projeto 2 do Matheus Albuquerque!</h1><p>Navegue pelas rotas: /projeto2 e /contato para mais informações</p>");
});

// Rota 2 - Sobre
app.get("/projeto2", function(req, res) {
    res.send("<h1>Sobre</h1><p>Segundo projeto desenvolvido para a disciplina de Desenvolvimento de Software em Nuvem - Unifor.</p>");
});

// Rota 3 - Contato
app.get("/contato", function(req, res) {
    res.send("<h1>Contato</h1><p>Entre em contato pelo e-mail: matheusabporto@gmail.com</p>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(erro) {
    if (erro) {
        console.log("Erro ao iniciar.");
    } else {
        console.log("Servidor rodando na porta " + PORT);
    }
});