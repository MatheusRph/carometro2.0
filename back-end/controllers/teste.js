// Importação do modelo de dados Usuario
const { CharsetToEncoding } = require('mysql2');
const Usuario = require('../models/usuario'); // Alterado de Usuarios para Usuario
const Usuario_Turma = require('../models/usuarios_turmas')
const { where } = require('sequelize');


exports.getCpf = async (req, res) => {
    try {
        const cpf = req.body.cpf

        const findCpf = await Usuario.findOne({ where: { cpf: cpf } });

        // const cpf = req.body.cpf

        // const cpfValido = await Usuario.findOne({ where: { cpf: cpf } });

        if (findCpf) {
            // Retorno de uma mensagem de sucesso se um usuário com o mesmo CPF já existir
            return res.json({
                ok: "true",
            });
        } else {
            // Retorno de uma mensagem de erro se o usuário com o CPF não existir
            return res.json({
                ok: "false",
            });
        }        


    } catch (err) {
        console.error(err);
        res.status(500).json({
            ok: false,
            message: 'Internal Server Error',
        });
    }
}