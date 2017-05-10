/**
 * Created by wjs99 on 2017-05-08.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    project_name: String,
    owner: String,
    published_date: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('project', projectSchema);