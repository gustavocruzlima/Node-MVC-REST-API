var mongoose = require('mongoose');

var machineOneSchema = mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    tempo1: {
        type: String,
        required: true
    },
    massa: {
        type: String,
        required: true
    },
    tempo3: {
        type: String,
        required: true
    },
    aprovado: {
        type: Boolean,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var MachineOne = module.exports = mongoose.model('machineOne', machineOneSchema);module.exports.get = function (callback, limit) {
    MachineOne.find(callback).limit(limit);
}