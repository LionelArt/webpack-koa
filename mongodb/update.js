// MongoDB数据库
const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/dragon';

let updateData = (db, callback) => {
	// 连接集合
	let collection = db.collection('user');
	// 更新数据
	let whereStr = {'name': '许少龙'},
		updateStr = {$set: {'contact': {'wechat': 13926040123}}};

	collection.update(whereStr, updateStr, (err, result) => {
		callback(result);
	});
};

MongoClient.connect(DB_CONN_STR, (err, db) => {
	console.log('更新成功！');

	updateData(db, (result) => {
		console.log(result);
		db.close();
	});
});