//Import Reg Model
Reg = require('./regModel');

//Para index
exports.index = function (req, res) {
    Reg.get(function (err, reg) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "OK",
            message: "Obtidos Registos com Sucesso",
            data: reg       
        });
    });
};

//Criar novo Registo
exports.add = function (req, res) {
    var reg = new Reg();
    reg.nome = req.body.nome? req.body.nome: reg.nome;
    reg.email = req.body.email;
    reg.telef = req.body.telef;
    reg.morada = req.body.morada;

    //Guardar e verificar erros
    reg.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: "Novo Registo Adicionada!",
            data: reg
        });
    });
};

// Ver Registo
exports.view = function (req, res) {
    Reg.findById(req.params.reg_id, function (err, reg) {
        if (err)
            res.send(err);
        res.json({
            message: 'Detalhes do Registo',
            data: reg
        });
    });
};

// Atualizar Registo
exports.update = function (req, res) {
    Reg.findById(req.params.reg_id, function (err, reg) {
        if (err)
            res.send(err);
        reg.nome = req.body.nome ? req.body.nome : reg.nome;
        reg.email = req.body.email;
        reg.telef = req.body.telef;
        reg.morada = req.body.morada;

        //Guardar e verificar erros
        reg.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Registo Alterado com Sucesso",
                data: reg
            });
        });
    });
};

// Apagar Registo
exports.delete = function (req, res) {
    Reg.deleteOne({
        _id: req.params.reg_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "OK",
            message: 'Registo Eliminado!'
        });
    });
};