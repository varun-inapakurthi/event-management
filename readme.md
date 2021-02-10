Step to run the app:
 1) run `npm install`
 2) run `node index.js`


 API routes

 1) To create an event-(POST=> localhost:3001/event)

    choose body and then form-data in postman to pass
    body values. All fields are optional

    body: </br>
     title = hello updated

     url = www.url.com

     eventDate = 09-02-2021

     eventTimings[from] = 1pm

     eventTimings[to] = 2pm

     about = about testing

     speakers[0][name] = speaker1 </br>
     speakers[0][info] = speaker1 info </br>
     speakers = {select image for speaker1} (select key type=file) </br>


     speakers[1][name] = speaker2 </br>
     speakers[1][info] = speaker2 info </br>
     speakers = {select image for speaker2} (select key type=file) </br>

     moderators[0][name] = moderators1 </br>
     moderators[0][info] = moderators1 info </br>
     moderators = {select image for moderators1} (select key type=file) </br>

     moderators[1][name] = moderators2 </br>
     moderators[1][info] = moderators2 info </br>
     moderators = {select image for moderators2} (select key type=file) </br>

     materialAndResource[info] = materialAndResource testing </br>
     materialAndResource[embededVideos][0] = www.youtube.com </br>
     materialAndResource[embededVideos][1] = www.youtube.com </br>
     images = {select images1} (select key type=file) </br>
     images = {select images..n} (select key type=file) </br>
     files = {select file1} (select key type=file) </br>
     files = {select file..n} (select key type=file) </br>

     organisedBy[0] = Organiser1 </br>
     organisedBy[1] = Organiser1 </br>

     tags[0] = tag1 </br>
     tags[1] = tag2 </br>

 2) To get an event-(GET=> localhost:3001/event/{eventID})
    example-localhost:3001/event/6022de012eef8725ac45ad07 </br>
    can get the event id after event creation


 3) To delete an event-(DELETE=> localhost:3001/event/{eventID})
    example-localhost:3001/event/6022de012eef8725ac45ad07 </br>
    can get the event id after event creation


 4) To delete a speaker-(DELETE=> localhost:3001/event/speakers/{speakerID})
    example-localhost:3001/event/speakers/60234641c86dee3de4e183e2 </br>
    can get the speaker id after event creation


 5) To delete a moderators-(DELETE=> localhost:3001/event/moderators/{speakerID})
    example-localhost:3001/event/moderators/60234641c86dee3de4e183e2 </br>
    can get the moderator id after event creation


 6) To remove a organiser-(DELETE=> localhost:3001/event/organiser/{eventId})
    example-localhost:3001/event/organiser/6023463cc86dee3de4e183e1 </br>
    can get the event id after event creation </br>
    body: </br>
    {organiser:organiser name}


 7) To remove a tag-(DELETE=> localhost:3001/event/tag/{eventId})
    example-localhost:3001/event/tag/6023463cc86dee3de4e183e1 </br>
    can get the event id after event creation </br>
    body: </br>
    {tag:tag name}


 8) To update an event-(POST=> localhost:3001/event/{eventID})

    choose body and then form-data in postman to pass 
    body values. All fields are optional </br>

     body: </br>
     title = hello updated

     url = www.url.com

     eventDate = 09-02-2021

     eventTimings[from] = 1pm

     eventTimings[to] = 2pm

     about = about testing

     speakers[0][name] = speaker1 </br>
     speakers[0][info] = speaker1 info </br>
     speakers = {select image for speaker1} (select key type=file) </br>


     speakers[1][name] = speaker2 </br>
     speakers[1][info] = speaker2 info </br>
     speakers = {select image for speaker2} (select key type=file) </br>

     moderators[0][name] = moderators1 </br>
     moderators[0][info] = moderators1 info </br>
     moderators = {select image for moderators1} (select key type=file) </br>

     moderators[1][name] = moderators2 </br>
     moderators[1][info] = moderators2 info </br>
     moderators = {select image for moderators2} (select key type=file) </br>

     materialAndResource[info] = materialAndResource testing </br>
     materialAndResource[embededVideos][0] = www.youtube.com </br>
     materialAndResource[embededVideos][1] = www.youtube.com </br>
     images = {select images1} (select key type=file) </br>
     images = {select images..n} (select key type=file) </br>
     files = {select file1} (select key type=file) </br>
     files = {select file..n} (select key type=file) </br>

     organisedBy[0] = Organiser1 </br>
     organisedBy[1] = Organiser1 </br>

     tags[0] = tag1 </br>
     tags[1] = tag2 </br>

