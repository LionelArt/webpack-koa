const mongoose = require('./db');
const Schema = mongoose.Schema;

// 定义一个Schema模型
let UserSchema = new Schema({
	name: {type: String},
	company: {type: Array},
	skin: {type: Array},
	job: {type: String}
});

module.exports = mongoose.model('User', UserSchema);