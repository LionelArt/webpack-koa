// MongoDB数据库
const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/dragon';

exports.searchUser = (user) => {
	return new Promise((resolve, reject) => {
		MongoClient.connect(DB_CONN_STR, (err, db) => {
			// 连接集合
			let collection = db.collection('user');
			// 查询数据
			let whereStr = {'name': user};

			collection.find(whereStr).toArray((err, result) => {
				// 查询到记录
				if(result.length > 0) {
					resolve({
						code: 1,
						data: result[0]
					});
				// 查询为空
				}else {
					resolve({
						code: 0
					});
				}
			});

			// 关闭数据库连接
			db.close();
		});
	})
};