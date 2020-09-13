const express = require('express');
const router = express.Router();
const connection = require('../database');

exports.get =  function(req, res){
    connection.query('SELECT * FROM games', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        }else{
            res.json({text: err});
        }
    }); 
}

exports.getGames = function(req, res) {
    const { id } = req.params; 
    connection.query('SELECT * FROM games WHERE id = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            res.json({text: err});
        }
    });
}

exports.postGame =  function(req, res){
    // const {id, title, description, image, created_at} = req.body;
    connection.query('INSERT INTO games set ?', [req.body]);
    res.json({ text: 'Game Saved' });
}
