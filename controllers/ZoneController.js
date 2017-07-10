/**
 * Created by pankratov on 7/3/17.
 */

var Zone = require('../models/Zone');

// These are 5 primary CRUD presentation
// This guy is not communicating with a browser he is only a callback - therefore modularity, controllers and sheet
// and it all comes together
// Knows nothing of express, node -> gives reusability between projects
module.exports = {
    find: function(params, callback) {
        Zone.find(params, function (err, zones) {
            // write Err always first and the payload second
            if (err){
                callback(err, null);
                return;
            }

            // Zones <- payload
            callback(null, zones);
        })
    },

    findById: function (id, callback) {
        Zone.findById(id, function (err, zone) {
            // write Err always first and the payload second
            if (err){
                callback(err, null);
                return;
            }

            // zone <- payload
            callback(null, zone);
        })
    },
    
    create: function (params, callback) {
        var zip = params['zipCodes'].split(',');
        var zipsArr = [];
        zip.forEach(function (zipCode) {
            zipsArr.push(zipCode.trim());
        });
        params['zipCodes'] = zipsArr;

        Zone.create(params, function (err, zone) {
            // write Err always first and the payload second
            if (err){
                callback(err, null);
                return;
            }

            // zone <- payload
            callback(null, zone);
        })
    },

    update: function (id, params, callback) {
        Zone.findByIdAndUpdate(id, params, {new: true}, function (err, zone) {
            // write Err always first and the payload second
            if (err){
                callback(err, null);
                return;
            }

            // zone <- payload
            callback(null, zone);

        })
    },

    destroy: function (id, callback) {
        Zone.findByIdAndRemove(id, function (err) {
            // write Err always first and the payload second
            if (err){
                callback(err, null);
                return;
            }

            // zone <- payload
            callback(null, null);
        })
    }
};