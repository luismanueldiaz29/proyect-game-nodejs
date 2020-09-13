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

exports.post =  function(req, res){
    // const {id, title, description, image, created_at} = req.body;
    connection.query('INSERT INTO games set ?', [req.body]);
    res.json({ text: 'Game Saved' });
}

exports.delete = function(req, res){
    const { id } = req.params;
    connection.query('DELETE FROM games WHERE id = ?', [id]);
    res.json({ message: "The game was deleted" });
}

exports.update = function(req, res){
    const { id } = req.params;
    const oldGame = req.body;
    connection.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
    res.json({ message: "The game was Updated" });
}
