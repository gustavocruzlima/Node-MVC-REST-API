var mongoose = require('mongoose');

var machineThreeSchema = mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    tempo4: {
        type: String,
        required: true
    },
    cor: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var MachineThree = module.exports = mongoose.model('machineThree', machineThreeSchema);module.exports.get = function (callback, limit) {
    MachineThree.find(callback).limit(limit);
}