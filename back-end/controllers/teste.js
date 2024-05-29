// Importação do modelo de dados Usuario
const Usuario = require('../models/usuario');
const Turma = require('../models/turma');
const Usuario_Turma = require('../models/usuarios_turmas');
const { where, json } = require('sequelize');

exports.teste = async (req, res) => {
    console.log(req.body);

    try {
        const { nomeTurma, descricao, inicio, fim } = req.body;
        
        const createTurma = await Turma.create({
            codigo: nomeTurma,
            descricao: descricao,
            inicio: inicio,
            fim: fim,
            fotos: 'vazio'
        });

        if (createTurma) {
            return res.json({
                ok: true,
                message: "Turma criada com sucesso'"
            });
        } else {
            return res.status(500).json({
                ok: false,
                message: 'Erro ao criar a turma'
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            ok: false,
            message: 'Internal Server Error',
        });
    }
};
