const assert = require('assert');
const request = require('supertest');
const app = require('../../src/app')


describe('GET /', function () {
    it('responds with json', function (done) {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200,)
            .then(response => {
                assert(response.body.name, 'Ferry L. H.')
                done();
            })
            .catch(err => done(err))
    });
});