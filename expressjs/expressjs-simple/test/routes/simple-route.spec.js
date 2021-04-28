const assert = require('assert');
const request = require('supertest');
const app = require('../../src/app')


describe('Simple', function () {

    describe('GET /', function () {

        it('responds with json', async function () {
            const response = await request(app)
                .get('/')
                .expect(200);
            assert(response.body.name, 'Ferry L. H.');
        });

    });

});