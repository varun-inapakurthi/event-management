const mongoose = require('mongoose');
const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
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


const Person = mongoose.model('Person', personSchema);
module.exports = Person;