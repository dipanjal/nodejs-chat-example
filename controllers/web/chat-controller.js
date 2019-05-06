var express = require('express')
var router = express.Router();

// var app = express()
// var io = require('socket.io')(http);

router.get('/', (req,res) => {
    res.sendFile(__dirname+'../../views/index.html')
});

module.exports = router