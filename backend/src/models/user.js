const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

// TODO: Add list for crypto and RSS

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: [String],
        default: ['user']
    }
});

userSchema.pre('save', async function (next) {
    const user = this;
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

userSchema.methods.isValidPassword = async function (password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
}

const User = mongoose.model('User', userSchema);

module.exports = User;