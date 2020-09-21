Parameters = require('../Models/machineTwoModel');// Handle index actions
exports.index = function (req, res) {
    Parameters.get(function (err, machinesTwo) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Parameters retrieved successfully",
            data: machinesTwo
        });
    });
};

exports.new = function (req, res) {
    var machinetwo = new Parameters();
    machinetwo.productId = req.body.productId ? req.body.productId : machinetwo.productId;
    machinetwo.tempo2 = req.body.tempo2;
    machinetwo.tempo5 = req.body.tempo5;
    machinetwo.save(function (err) {
        if (err)
            res.json(err);

            res.json({
            message: 'New parameters of machine Two created!',
            data: machinetwo
        });
    });
};

exports.view = function (req, res) {
    Parameters.findById(req.params.machinetwo_id, function (err, machinetwo) {
        if (err)
            res.send(err);
        res.json({
            message: 'Machine Two details loading..',
            data: machinetwo
        });
    });
};

exports.update = function (req, res) {Parameters.findById(req.params.machinetwo_id, function (err, machinetwo) {
        if (err)
        res.send(err);
        machinetwo.productId = req.body.productId ? req.body.productId : machinetwo.productId;
        machinetwo.tempo2 = req.body.tempo2;
        machinetwo.tempo5 = req.body.tempo5;

        machinetwo.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Machine Two Info updated',
                data: machinetwo
            });
        });
    });
};

exports.delete = function (req, res) {
    MachineTwo.remove({
        _id: req.params.machinetwo_id
    }, function (err, machinetwo) {
        if (err)
            res.send(err);res.json({
            status: "success",
            message: 'Paramerter of Machine Two deleted'
        });
    });
};