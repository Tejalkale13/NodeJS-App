// test/test.js
const request = require('supertest');
const app = require('../index');

describe('GET Endpoints', () => {
    it('should return hello response from /', async () => {
        const res = await request(app)
            .get('/')
            .expect(200);
        expect(JSON.parse(res.text)).toEqual({ response: 'Hello From Thetips4you' });
    });

    it('should return hello world from /will', async () => {
        const res = await request(app)
            .get('/will')
            .expect(200);
        expect(JSON.parse(res.text)).toEqual({ response: 'Hello World' });
    });

    it('should return success message from /ready', async () => {
        const res = await request(app)
            .get('/ready')
            .expect(200);
        expect(JSON.parse(res.text)).toEqual({ response: ' Great!, It works!' });
    });
});
