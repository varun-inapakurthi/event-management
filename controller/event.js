
const Event = require('./../models/event')
const Person = require('./../models/person')
const moment = require('moment');
const Resource = require('../models/resource');
const upload = require('./../config/multer')
const { imageUpload } = require('./../utils/imgUpload')


exports.createEvent = async (req, res) => {

    const event = new Event()
    try {
        createOrUpdateEvent(req, res, event)
    } catch (error) {
        return res.json(error)
    }
}

exports.getEvent = async (req, res) => {
    try {
        let event = await Event.findById(req.params.id).populate('speakers moderators materialAndResource')
        res.json({
            status: true,
            event
        })

    } catch (error) {

        res.json({
            status: false,
            error
        })

    }
}


exports.updateEvent = async (req, res) => {

    const event = await Event.findById(req.params.id)
    try {
        createOrUpdateEvent(req, res, event)
    } catch (error) {
        res.json(error)
    }
}

exports.deleteEvent = async (req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id)

        await Person.deleteMany({ eventId: req.params.id })
        await Resource.deleteOne({ eventId: req.params.id })
        res.json({
            status: true,
        })

    } catch (error) {

        res.json({
            status: false,
            error
        })

    }
}

exports.removeOrganiser = async (req, res) => {

    try {
        const event = await Event.findById(req.params.id)
        event.organisedBy = event.organisedBy.filter(organiser => organiser !== req.body.organiser)
        event.save();

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
exports.removeTag = async (req, res) => {

    try {
        const event = await Event.findById(req.params.id)
        event.tags = event.tags.filter(tg => tg !== req.body.tag)
        event.save();

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






const createOrUpdateEvent = (req, res, event) => {

    try {



        upload(req, res, async (err) => {
            if (err) {
                return res.json(err)
            }

            for (let key in req.body) {
                if (key === "eventDate") {

                    let date = req.body[key]
                    const dt = moment(date, "DD-MM-YYYY");
                    event[key] = dt

                }
                else if (key === "speakers" || key === "moderators") {

                    let allSpeakers = [];
                    let allModerators = []

                    for (let i = 0; i < req.body[key].length; i++) {

                        let name = req.body[key][i]?.name || ""
                        let info = req.body[key][i]?.info || ""
                        let imgData = await imageUpload(req.files[key][i].filename, key);
                        let img = imgData?.secure_url
                        if (key === "speakers") {
                            allSpeakers.push({ name, img, info, eventId: event._id })
                        } else {
                            allModerators.push({ name, img, info, eventId: event._id })
                        }

                    }

                    let speakersData = []
                    let moderatorsData = []

                    if (key === "speakers") {
                        speakersData = await Person.create(allSpeakers);
                        event[key] = speakersData.map(sp => sp._id)
                    } else {
                        moderatorsData = await Person.create(allModerators);
                        event[key] = moderatorsData.map(md => md._id)
                    }
                }

                else if (key === "materialAndResource") {
                    let info = req.body[key].info || ""
                    let embededVideos = req.body[key].embededVideos || []
                    let eventId = event._id
                    let imgs = []
                    let files = []
                    if (req.files && req.files['images']) {
                        for (let i = 0; i < req.files['images'].length; i++) {

                            let imgData = await imageUpload(req.files['images'][i].filename, key);

                            imgs.push(imgData?.secure_url)

                        }
                    }
                    if (req.files && req.files['files']) {
                        for (let i = 0; i < req.files['files'].length; i++) {

                            let fileData = await imageUpload(req.files['files'][i].filename, key);

                            files.push(fileData?.secure_url)

                        }
                    }

                    let resource = await Resource.create({ info, embededVideos, eventId, imgs, files });
                    event[key] = resource._id
                }

                else {
                    event[key] = req.body[key]
                }
            }


            await event.save()
            return res.json(event)

        })

    } catch (error) {
        res.json(error)
    }
}



