const Event = require('./../models/event')
const Person = require('./../models/person')

exports.deleteModerator = async (req, res) => {
    try {
        const { id } = req.params;
        let person = await Person.findById(id)

        let event = await Event.findById(person.eventId);

        let moderatorsIndex = event.moderators.indexOf(person._id);
        event.moderators.splice(moderatorsIndex, 1);
        await event.save()
        await person.remove()
        res.json({
            status: true
        })
    } catch (error) {
        res.json({
            status: false,
            error
        })

    }

}
exports.deleteSpeaker = async (req, res) => {
    try {
        const { id } = req.params;
        let person = await Person.findById(id)

        let event = await Event.findById(person.eventId);

        let speakersIndex = event.speakers.indexOf(person._id);
        event.speakers.splice(speakersIndex, 1);

        await event.save()
        await person.remove()
        res.json({
            status: true
        })
    } catch (error) {
        res.json({
            status: false,
            error
        })

    }

}