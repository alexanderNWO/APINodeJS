const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlatformSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    fundator: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
    image: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model('Platform', PlatformSchema);