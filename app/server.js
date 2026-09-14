const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const tentativasLogin = {};
const MAX_TENTATIVAS = 5;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/login', (req, res) => {

    const { cpf, senha } = req.body;

    // Validação dos campos obrigatórios
    if (!cpf && !senha) {
        return res.status(400).json({
            sucesso: false,
            mensagem: 'CPF e senha são obrigatórios'
        });
    }

    if (!cpf) {
        return res.status(400).json({
            sucesso: false,
            mensagem: 'CPF é obrigatório'
        });
    }

    if (!senha) {
        return res.status(400).json({
            sucesso: false,
            mensagem: 'Senha é obrigatória'
        });
    }

    // Verificação das credenciais
    if (cpf === '12345678900' && senha === 'FinBank@123') {

        // Login válido: zera o contador
        tentativasLogin[cpf] = 0;

        return res.status(200).json({
            sucesso: true,
            mensagem: 'Login realizado com sucesso',
            usuario: {
                nome: 'Cliente FinBank',
                cpf: cpf
            }
        });
    }

    // Credenciais inválidas
    if (!tentativasLogin[cpf]) {
        tentativasLogin[cpf] = 0;
    }

    tentativasLogin[cpf]++;

    // Bloqueio após 5 tentativas
    if (tentativasLogin[cpf] >= MAX_TENTATIVAS) {
        return res.status(401).json({
            sucesso: false,
            mensagem: 'Conta bloqueada'
        });
    }

    return res.status(401).json({
        sucesso: false,
        mensagem: 'CPF ou senha inválidos'
    });
});

app.listen(PORT, () => {
    console.log(`FinBank disponível em http://localhost:${PORT}`);
});