const path = require('path');
const fs = require('fs');
const cloudinary = require('./../config/cloudinary')
exports.imageUpload = async (imgname, key) => {

    try {


        let imgData = await cloudinary.uploader.upload(path.join(__dirname, "..", "/public/images", `/${imgname}`), {
            folder: key
        })

        await fs.unlinkSync(path.join(__dirname, "..", "/public/images", `/${imgname}`));

        return imgData
    } catch (error) {
        console.log('error', error)
    }
}