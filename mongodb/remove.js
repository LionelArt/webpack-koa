// MongoDB数据库
const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/dragon';

let removeData = (db, callback) => {
	// 连接集合
	let collection = db.collection('user');
	// 删除数据
	let whereStr = {'name': '许少龙1'};

	collection.remove(whereStr, (err, result) => {
		callback(result);
	});
};

MongoClient.connect(DB_CONN_STR, (err, db) => {
	console.log('更新成功！');

	removeData(db, (result) => {
		console.log(result);
		db.close();
	});
});