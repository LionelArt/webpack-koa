const User = require('./user');

// 查找
function searchUser() {
	let whereStr = {'name': '小许先生'};

	User.find(whereStr, (err, res) => {
		console.log(res);
	});
}

// 插入
function insertUser() {
	let user = new User({
		name: '许少龙',
		company: ['中国移动', '中国电信'],
		skin: ['vue', 'react'],
		job: '前端开发工程师'
	});

	user.save((err, res) => {
		console.log(res);
	});
}

searchUser();