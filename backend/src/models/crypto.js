const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cryptoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    cmcId: {
        type: String,
        required: true
    },
    state: {
        type: Boolean,
        required: true,
        default: true
    }
});

const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;