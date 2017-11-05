'use strict';

// var mongoose = require('mongoose'),
//   Search = mongoose.model('Searches');

// exports.list_results= function(req, res) {
//     res.json({ results: 'The results would go here!' });
// };

// exports.create_a_task = function(req, res) {
//   var new_task = new Task(req.body);
//   new_task.save(function(err, task) {
//     if (err) {
//         res.send(err);
//     }
//     res.json(task);
//   });
// };

// exports.read_a_task = function(req, res) {
//   Task.findById(req.params.taskId, function(err, task) {
//     if (err) {
//         res.send(err);
//     }
//     res.json(task);
//   });
// };

// exports.update_a_task = function(req, res) {
//   Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
//     if (err) {
//         res.send(err);
//     }
//     res.json(task);
//   });
// };

// exports.delete_a_task = function(req, res) {

// Task.remove({
//     _id: req.params.query
//   }, function(err, task) {
//     if (err) {
//         res.send(err);
//     }
//     res.json({ message: 'Search successfully deleted' });
//   });
// };