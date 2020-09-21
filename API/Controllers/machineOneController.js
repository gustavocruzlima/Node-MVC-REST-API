//import model of machine
Parameters = require('../Models/machineOneModel');// Handle index actions
exports.index = function (req, res) {
    Parameters.get(function (err, machineOnes) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Parameters retrieved successfully",
            data: machineOnes
        });
    });
};

exports.new = function (req, res) {
    var machineone = new Parameters();
    machineone.productId = req.body.productId ? req.body.productId : machineone.productId;
    machineone.tempo1 = req.body.tempo1;
    machineone.massa = req.body.massa;
    machineone.tempo3 = req.body.tempo3;
    machineone.aprovado = req.body.aprovado;// save the machineone and check for errors
    machineone.save(function (err) {
        if (err)
            res.json(err);

            res.json({
            message: 'New parameters of machine One created!',
            data: machineone
        });
    });
};

exports.view = function (req, res) {
    Parameters.findById(req.params.machineone_id, function (err, machineone) {
        if (err)
            res.send(err);
        res.json({
            message: 'Machine One details loading..',
            data: machineone
        });
    });
};

exports.update = function (req, res) {Parameters.findById(req.params.machineone_id, function (err, machineOne) {
        if (err)
        res.send(err);
        machineone.productId = req.body.productId ? req.body.productId : machineone.productId;
        machineone.tempo1 = req.body.tempo1;
        machineone.massa = req.body.massa;
        machineone.tempo3 = req.body.tempo3;
        machineone.aprovado = req.body.aprovado;// save the machineone and check for errors

        machineone.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Machine One Info updated',
                data: machineOne
            });
        });
    });
};

exports.delete = function (req, res) {
    MachineOne.remove({
        _id: req.params.machineone_id
    }, function (err, machineOne) {
        if (err)
            res.send(err);res.json({
            status: "success",
            message: 'Paramerter deleted'
        });
    });
};