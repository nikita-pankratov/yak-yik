/**
 * Created by pankratov on 7/3/17.
 */

// Think: "Modularity"
var ZoneController = require('./ZoneController');
var CommentController = require('./CommentController');

module.exports = {
    comment: CommentController,
    zone: ZoneController
};