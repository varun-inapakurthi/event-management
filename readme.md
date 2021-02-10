Step to run the app:
 1) run `npm install`
 2) run `node index.js`


 API routes

 1) To create an event-(POST=> localhost:3001/event)

    choose body and then form-data in postman to pass
    body values. All fields are optional

    body:
     title = hello updated

     url = www.url.com

     eventDate = 09-02-2021

     eventTimings[from] = 1pm

     eventTimings[to] = 2pm

     about = about testing

     speakers[0][name] = speaker1
     speakers[0][info] = speaker1 info
     speakers = {select image for speaker1} (select key type=file)


     speakers[1][name] = speaker2
     speakers[1][info] = speaker2 info
     speakers = {select image for speaker2} (select key type=file)

     moderators[0][name] = moderators1
     moderators[0][info] = moderators1 info
     moderators = {select image for moderators1} (select key type=file)

     moderators[1][name] = moderators2
     moderators[1][info] = moderators2 info
     moderators = {select image for moderators2} (select key type=file)

     materialAndResource[info] = materialAndResource testing
     materialAndResource[embededVideos][0] = www.youtube.com
     materialAndResource[embededVideos][1] = www.youtube.com
     images = {select images1} (select key type=file)
     images = {select images..n} (select key type=file)
     files = {select file1} (select key type=file)
     files = {select file..n} (select key type=file)

     organisedBy[0] = Organiser1
     organisedBy[1] = Organiser1

     tags[0] = tag1
     tags[1] = tag2

 2) To get an event-(GET=> localhost:3001/event/{eventID})
    example-localhost:3001/event/6022de012eef8725ac45ad07
    can get the event id after event creation


 3) To delete an event-(DELETE=> localhost:3001/event/{eventID})
    example-localhost:3001/event/6022de012eef8725ac45ad07
    can get the event id after event creation


 4) To delete a speaker-(DELETE=> localhost:3001/event/speakers/{speakerID})
    example-localhost:3001/event/speakers/60234641c86dee3de4e183e2
    can get the speaker id after event creation


 5) To delete a moderators-(DELETE=> localhost:3001/event/moderators/{speakerID})
    example-localhost:3001/event/moderators/60234641c86dee3de4e183e2
    can get the moderator id after event creation


 6) To remove a organiser-(DELETE=> localhost:3001/event/organiser/{eventId})
    example-localhost:3001/event/organiser/6023463cc86dee3de4e183e1
    can get the event id after event creation
    body:
    {organiser:organiser name}


 7) To remove a tag-(DELETE=> localhost:3001/event/tag/{eventId})
    example-localhost:3001/event/tag/6023463cc86dee3de4e183e1
    can get the event id after event creation
    body:
    {tag:tag name}


 8) To update an event-(POST=> localhost:3001/event/{eventID})

    choose body and then form-data in postman to pass
    body values. All fields are optional

    body:
     title = hello updated

     url = www.url.com

     eventDate = 09-02-2021

     eventTimings[from] = 1pm

     eventTimings[to] = 2pm

     about = about testing

     speakers[0][name] = speaker1
     speakers[0][info] = speaker1 info
     speakers = {select image for speaker1} (select key type=file)


     speakers[1][name] = speaker2
     speakers[1][info] = speaker2 info
     speakers = {select image for speaker2} (select key type=file)

     moderators[0][name] = moderators1
     moderators[0][info] = moderators1 info
     moderators = {select image for moderators1} (select key type=file)

     moderators[1][name] = moderators2
     moderators[1][info] = moderators2 info
     moderators = {select image for moderators2} (select key type=file)

     materialAndResource[info] = materialAndResource testing
     materialAndResource[embededVideos][0] = www.youtube.com
     materialAndResource[embededVideos][1] = www.youtube.com
     images = {select images1} (select key type=file)
     images = {select images..n} (select key type=file)
     files = {select file1} (select key type=file)
     files = {select file..n} (select key type=file)

     organisedBy[0] = Organiser1
     organisedBy[1] = Organiser1

     tags[0] = tag1
     tags[1] = tag2


