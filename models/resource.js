const mongoose = require('mongoose');
const resourceSchema = mongoose.Schema({
    imgs: [{
        type: String,
    }],
    files: [{
        type: String,
    }],
    embededVideos: [{
        type: String,
        validate: {
            validator: function (v) {
                return /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(v);
            },
            message: props => `${props.value} is not a valid url!`
        },
    }],
    info: {
        type: String
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
    }
},
    {
        timestamps: true,
    })
const Resource = mongoose.model('Resource', resourceSchema);
module.exports = Resource;