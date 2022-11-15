const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// TODO: Complete this schema

const cryptoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: Boolean,
        required: true,
        default: true
    }
});
