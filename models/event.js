const mongoose = require('mongoose');
const eventSchema = mongoose.Schema({
    title: {
        type: String,
        // required: true
    },
    url: {
        type: String,
        validate: {
            validator: function (v) {
                return /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(v);
            },
            message: props => `${props.value} is not a valid url!`
        },
        // required: true
    },
    eventDate: {
        type: Date,
        // required: true
    },
    eventTimings: {
        from: {
            type: String,
        },
        to: {
            type: String
        }
    },
    about: {
        type: String
    },
    speakers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Person" }],
    moderators: [{ type: mongoose.Schema.Types.ObjectId, ref: "Person" }],
    materialAndResource: { type: mongoose.Schema.Types.ObjectId, ref: "Resource" },
    joiningInfo: {
        type: String
    },
    organisedBy: [{
        type: String
    }],
    tags: [{
        type: String
    }]
},
    {
        timestamps: true,
    })


const Event = mongoose.model('Event', eventSchema);
module.exports = Event;