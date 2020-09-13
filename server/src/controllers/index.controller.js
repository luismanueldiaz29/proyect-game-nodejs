const express = require('express');
const router = express.Router();

exports.index = function(req, res){ 
    res.json({text: 'the initial page is api/games'});
}