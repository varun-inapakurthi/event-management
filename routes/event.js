const express = require('express');
const { deleteModerator, deleteSpeaker } = require('../controller/person');
const router = express.Router();
const { createEvent, getEvent, updateEvent, deleteEvent, removeOrganiser, removeTag } = require('./../controller/event')

router.post('/', createEvent)
router.delete('/moderators/:id', deleteModerator)
router.delete('/speakers/:id', deleteSpeaker)
router.delete('/organiser/:id', removeOrganiser)
router.delete('/tag/:id', removeTag)
router.route('/:id').get(getEvent).put(updateEvent).delete(deleteEvent)

module.exports = router;