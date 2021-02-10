const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: path.join(__dirname, "..", "/public/images"),
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() +
            path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
}).fields([
    { name: 'speakers' },
    { name: 'moderators' },
    { name: 'images' },
    { name: 'files' }
])


module.exports = upload;
