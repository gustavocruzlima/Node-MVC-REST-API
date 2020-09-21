Parameters = require('../Models/machineThreeModel');// Handle index actions
exports.index = function (req, res) {
    Parameters.get(function (err, machinesThree) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Parameters retrieved successfully",
            data: machinesThree
        });
    });
};

exports.new = function (req, res) {
    var machinethree = new Parameters();
    machinethree.productId = req.body.productId ? req.body.productId : machinethree.productId;
    machinethree.tempo4 = req.body.tempo4;
    machinethree.cor = req.body.cor;
    machinethree.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: 'New parameters of machine Three created!',
            data: machinethree
        });
    });
};

exports.view = function (req, res) {
    Parameters.findById(req.params.machinethree_id, function (err, machinethree) {
        if (err)
            res.send(err);
        res.json({
            message: 'Machine Three details loading..',
            data: machinethree
        });
    });
};

exports.update = function (req, res) {
    Parameters.findById(req.params.machinethree_id, function (err, machinethree) {
        if (err)
            res.send(err);
        machinethree.productId = req.body.productId ? req.body.productId : machinethree.productId;
        machinethree.tempo4 = req.body.tempo4;
        machinethree.cor = req.body.cor;

        machinethree.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Machine Three Info updated',
                data: machinethree
            });
        });
    });
};

exports.delete = function (req, res) {
    MachineThree.remove({
        _id: req.params.machinethree_id
    }, function (err, machinethree) {
        if (err)
            res.send(err); res.json({
                status: "success",
                message: 'Paramerter of Machine Three deleted'
            });
    });
};