/**
 * Created by pankratov on 7/3/17.
 */

var Comment = require('../models/Comment');

// These are 5 primary CRUD presentation
// This guy is not communicating with a browser he is only a callback - therefore modularity, controllers and sheet
// and it all comes together
// Knows nothing of express, node -> gives reusability between projects
module.exports = {
    find: function(params, callback) {
        Comment.find(params, function (err, comments) {
            // write Err always first and the payload second
            if (err){
                callback(err, null);
                return;
            }

            // comments <- payload
            callback(null, comments);
        })
    },

    findById: function (id, callback) {
        Comment.findById(id, function (err, comment) {
            // write Err always first and the payload second
            if (err){
                callback(err, null);
                return;
            }

            // comment <- payload
            callback(null, comment);
        })
    },

    create: function (params, callback) {
        Comment.create(params, function (err, comment) {
            // write Err always first and the payload second
            if (err){
                callback(err, null);
                return;
            }

            // comment <- payload
            callback(null, comment);
        })
    },

    update: function (id, params, callback) {
        Comment.findByIdAndUpdate(id, params, {new: true}, function (err, comment) {
            // write Err always first and the payload second
            if (err){
                callback(err, null);
                return;
            }

            // comment <- payload
            callback(null, comment);

        })
    },

    destroy: function (id, callback) {
        Comment.findByIdAndRemove(id, function (err) {
            // write Err always first and the payload second
            if (err){
                callback(err, null);
                return;
            }

            // null <- payload
            callback(null, null);
        })
    }
};