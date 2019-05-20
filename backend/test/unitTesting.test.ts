import chai from 'chai';
import server from '../src/index';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

/***
 * 
 */
describe('Test for routes Get', () => {
	it('#1.0 Test for status code ', async function() {
		try {
			const response = await chai.request(server).get('/adminstrator/getUsers');
			chai.expect(response.status).to.equal(403);
		} catch (error) {
			console.log(error);
		}
	});

	it('#1.1 Test to check if the object is not empty', async function() {
		try {
			const response = await chai.request(server).get('/adminstrator/getUsers');
			chai.expect(response.status).to.deep.equal({});
		} catch (error) {
			console.log(error);
		}
	});
});

/***
 * 
 */
describe('Test for Router Post', () => {
	it('#2 Test for post User', async function() {
		try {
			const response = await chai.request(server).post('/adminstrator/createUser').send({
				nameUser: 'Tobi',
				lastNameUser: 'bonilla',
				birthDateUser: '2015/07/20',
				identificationUser: '3344224',
				emailUser: 'tobito@gmail.com',
				passwordUser: 'tobi233',
				hodbed: '',
				typeUser: 'lector',
				linkCvlackEvaluator: '',
				levelEducationEvaluator: ''
			});
			chai.expect(response.status).to.equal(403);
		} catch (error) {
			console.log(error);
		}
	});
});

describe('test for Auth', () => {
	it('#3 Test for auth', async () => {
		try {
			const response = await chai.request(server).post('/auth/signUp').send({
				emailUser: 'tobito@gmail.com',
				passwordUser: 'tobi233'
			});
			chai.expect(response.status).to.equal(404);
		} catch (error) {
			console.log(error);
		}
	});
});

describe('test for Article', () => {
	it('#4 Test for create article', async () => {
		try {
			const response = await chai.request(server).post('/author/createArticle').send({
				title: 'Creation of energy',
				description: 'Becoming a great designer begins with mastering the fundamentals. If you overburden your mind with too many decisions, it’s hard to make progress. Perfect your technique in one area, then move on to the next.',
				publicationDate: new Date(),
				userIdUser: 8,
				typeUser: 'autor'
			});
			chai.expect(response.status).to.equal(403);
		} catch (error) {
			console.log(error);
		}
	});


	it('#5 Test for view article', async () => {
		try {
			const response = await chai.request(server).post('/author/ViewArticle').send({
				email: 'beatriz@hotmail.com',
			});
			chai.expect(response.status).to.equal(403);
		} catch (error) {
			console.log(error);
		}
	});

})
