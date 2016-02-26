/*
* 路由层
* 
* */

'use strict';

const auth = require('../api/auth');
const base = require('../api/base');
const mock = require('../api/mock');

function routes(app) {
	
	app.get('/', (req, res) => {
		res.render('index');
	})

	app.post('/apix/v1/login', auth.login);

	app.get('/apix/v1/systems', auth.verifyToken, base.listSystems);
	app.get('/apix/v1/groups', auth.verifyToken, base.listGroups);
	app.get('/apix/v1/apis', auth.verifyToken, base.listApis);

	app.post('/apix/v1/groups', auth.verifyToken, base.createGroup);
	app.post('/apix/v1/apis', auth.verifyToken, base.createApi);
	app.get('/apix/v1/group', auth.verifyToken, base.getGroup);
	app.get('/apix/v1/api', auth.verifyToken, base.getApi);

	app.get('/mock-api/:system/:group', mock.getAll);
	app.post('/mock-api/:system/:group', mock.create);
	app.get('/mock-api/:system/:group/:id', mock.getById);
	app.patch('/mock-api/:system/:group/:id', mock.updateById);
	app.delete('/mock-api/:system/:group/:id', mock.removeById);

}

module.exports = routes;