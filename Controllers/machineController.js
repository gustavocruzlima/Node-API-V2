Parameters = require('../Models/machineModel');// Handle index actions
exports.index = function (req, res) {
    Parameters.get(function (err, machines) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Parameters retrieved successfully",
            data: machines
        });
    });
};

exports.new = function (req, res) {
    var machine = new Parameters();
    machine.productId = req.body.productId ? req.body.productId : machine.productId;
    machine.tempo1 = req.body.tempo1;
    machine.cor = req.body.cor;
    machine.tempo2 = req.body.tempo2;
    machine.preenchimento = req.body.preenchimento;
    machine.tempo3 = req.body.tempo3;
    machine.peso = req.body.peso;
    machine.tempo4 = req.body.tempo4;
    machine.produto = req.body.produto;
    machine.tempo5 = req.body.tempo5;
    machine.prtlacrado = req.body.prtlacrado;
    machine.tempo6 = req.body.tempo6;
    machine.prtrotulado = req.body.prtrotulado;
    machine.tempototal = req.body.tempototal;
    machine.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: 'New parameters of machine created!',
            data: machine
        });
    });
};

exports.view = function (req, res) {
    Parameters.findById(req.params.machine_id, function (err, machine) {
        if (err)
            res.send(err);
        res.json({
            message: 'Machine details loading..',
            data: machine
        });
    });
};

exports.update = function (req, res) {
    Parameters.findById(req.params.machine_id, function (err, machine) {
        if (err)
            res.send(err);
            machine.productId = req.body.productId ? req.body.productId : machine.productId;
            machine.tempo1 = req.body.tempo1;
            machine.cor = req.body.cor;
            machine.tempo2 = req.body.tempo2;
            machine.preenchimento = req.body.preenchimento;
            machine.tempo3 = req.body.tempo3;
            machine.peso = req.body.peso;
            machine.tempo4 = req.body.tempo4;
            machine.produto = req.body.produto;
            machine.tempo5 = req.body.tempo5;
            machine.prtlacrado = req.body.prtlacrado;
            machine.tempo6 = req.body.tempo6;
            machine.prtrotulado = req.body.prtrotulado;
            machine.tempototal = req.body.tempototal;
        machine.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Machine Info updated',
                data: machine
            });
        });
    });
};

exports.delete = function (req, res) {
    machine.remove({
        _id: req.params.machine_id
    }, function (err, machine) {
        if (err)
            res.send(err); res.json({
                status: "success",
                message: 'Paramerter of Machinee deleted'
            });
    });
};