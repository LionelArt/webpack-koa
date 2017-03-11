// MongoDB数据库
const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/dragon';

let insertData = (db, callback) => {
	// 连接集合
	let collection = db.collection('user');
	// 插入数据
	let data = {
		'name': '许少龙1',
		'job': 'Java开发工程师',
		'company': ['阿里巴巴', '腾讯'],
		'skin': ['Java', 'Node.js', 'MongoDB']
	};

	collection.insert(data, (err, result) => {
		callback(result);
	});
};

MongoClient.connect(DB_CONN_STR, (err, db) => {
	console.log('连接成功！');

	insertData(db, (result) => {
		console.log(result);
		db.close();
	});
});