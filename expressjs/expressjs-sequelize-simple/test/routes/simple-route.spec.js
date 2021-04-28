const { assert } = require('chai');
const request = require('supertest');
const app = require('../../src/app')
const { migrate, seed } = require('../../src/tools/umzug');


describe('Simple', function () {

    before(async () => {
        await migrate();
        await seed();
    });

    describe('GET /', function () {

        it('responds with json', async function () {
            const response = await request(app)
                .get('/')
                .expect(200);
            assert.isArray(response.body);
            assert.isAbove(response.body.length, 0);
        });

    });

});