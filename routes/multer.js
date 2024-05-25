const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        //destination folder for uploads
        cb(null, './public/images/uploads')
    },
    filename: (req, file, cb) => {
        //Genenrating a unique file name using uuid
        const uniqueFilename = uuidv4();

        cb(null, uniqueFilename + path.extname(file.originalname)); //use the unique filename for uploaded file
    }
});

const upload = multer({ storage: storage });
module.exports = upload;