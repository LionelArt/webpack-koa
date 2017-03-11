// 引入koa
const koa = require('koa');
const koaRouter = require('koa-router')();
const koaBodyParser = require('koa-bodyparser');
const app = new koa();

// Request URL
app.use(async (ctx, next) => {
	console.log(`${ctx.request.method} ${ctx.request.url}`);

	// 调用下一个middleware
	await next();
});
// Response Time
app.use(async (ctx, next) => {
	// 当前时间
	let start = new Date().getTime();

	// 调用下一个middleware
	await next();

	// 消耗时间
	let ms = new Date().getTime() - start;
	ctx.set('X-Response-Time', ms + 'ms');
});

// Index Page
koaRouter.get('/', async (ctx, next) => {
	ctx.response.body =
		`<h1>Index</h1>
		<form action="/result" method="post">
			<p>User Name: <input type="text" name="name"></p>
			<p><input type="submit" value="搜索"></p>
		</form>`;
});
// Result Page
koaRouter.post('/result', async (ctx, next) => {
	let find = require('../mongodb/find');
	let name = ctx.request.body.name || '';
	let r = await find.searchUser(name);

	if(r.code === 1) {
		ctx.response.body =
			`<h1 data-id="${r.data._id}">${r.data.name}</h1>
			<dl>
				<dt>职位：</dt>
				<dd>${r.data.job}</dd>
			</dl>
			<dl>
				<dt>技能：</dt>
				<dd>${r.data.skin}</dd>
			</dl>
			<dl>
				<dt>公司：</dt>
				<dd>${r.data.company}</dd>
			</dl>`;
	}else {
		ctx.response.body =
			`<h1>没有找到该用户</h1>
			<a href="/">重新搜索</a>`;
	}
});

app.use(koaBodyParser());
app.use(koaRouter.routes());
app.listen(8888);

console.log('Koa app started at port 8888.');