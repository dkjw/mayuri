const express = require('express');
const router = express.Router();

const {
    sendData,
    getUser
} = require("./Ctrl"); 

router.post("/send", sendData);
router.get("/getuUser", getUser);


module.exports = router;