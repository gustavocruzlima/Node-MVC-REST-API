var mongoose = require('mongoose');

var machineTwoSchema = mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    tempo2: {
        type: String,
        required: true
    },
    tempo5: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var MachineTwo = module.exports = mongoose.model('machineTwo', machineTwoSchema);module.exports.get = function (callback, limit) {
    MachineTwo.find(callback).limit(limit);
}