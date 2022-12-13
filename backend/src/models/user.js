const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    googleId: {
        type: String,
        required: false
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

userSchema.methods.generateJWT = function () {
    const body = {_id: this._id, email: this.email, username: this.username,  roles: this.roles};
    const token = jwt.sign({user: body}, process.env.JWT_SECRET);
    return token;
}

const User = mongoose.model('User', userSchema);

module.exports = User;
