var mongoose = require('mongoose');

var machineSchema = mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    tempo1: {
        type: String,
        required: true
    },
    cor: {
        type: String,
        required: true
    },
    tempo2: {
        type: String,
        required: true
    },
    preenchimento: {
        type: String,
        required: true
    },
    tempo3: {
        type: String,
        required: true
    },
    peso: {
        type: String,
        required: true
    },
    tempo4: {
        type: String,
        required: true
    },
    produto: {
        type: String,
        required: true
    },
    tempo5: {
        type: String,
        required: true
    },
    prtlacrado: {
        type: String,
        required: true
    },
    tempo6: {
        type: String,
        required: true
    },
    prtrotulado: {
        type: String,
        required: true
    },
    tempototal: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Machine = module.exports = mongoose.model('machine', machineSchema);module.exports.get = function (callback, limit) {
    Machine.find(callback).limit(limit);
}