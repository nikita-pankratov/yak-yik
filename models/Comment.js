/**
 * Created by pankratov on 6/28/17.
 */
var mongoose = require('mongoose');


var CommentSchema = new mongoose.Schema({
    username: {type: String, default: ''},
    body: {type: String, default: ''},
    timestamp: {type:Date, default:Date.now()}
});




module.exports = mongoose.model('CommentSchema', CommentSchema);
