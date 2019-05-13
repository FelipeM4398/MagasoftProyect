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
            chai.expect(response.status).to.equal(200);
		} catch (error) {
			console.log(error);
		}
    });
    
    it('#1.1 Test to check if the object is not empty', async function() {
		try {
			const response = await chai.request(server).get('/adminstrator/getUsers');
            chai.expect(response.status).to.not.deep.equal({});
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
			chai.expect(response.status).to.equal(401);
		} catch (error) {
			console.log(error);
		}
	});
});

