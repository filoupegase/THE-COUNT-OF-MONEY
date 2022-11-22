const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rssFeedSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    state: {
        type: Boolean,
        required: true,
        default: false
    }
});

const RssFeed = mongoose.model('RssFeed', rssFeedSchema);

module.exports = RssFeed;
