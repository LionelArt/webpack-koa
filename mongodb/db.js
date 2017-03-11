const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/dragon';

// 连接
mongoose.connect(DB_URL);

// 连接成功
mongoose.connection.on('connected', () => {
	console.log('连接成功');
});

// 连接异常
mongoose.connection.on('error', () => {
	console.log('连接异常');
});

// 连接断开
mongoose.connection.on('disconnected', () => {
	console.log('连接断开');
});

module.exports = mongoose;