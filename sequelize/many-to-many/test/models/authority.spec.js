const assert = require('assert');
const { Authority } = require('../../src/models/index');
const { up } = require('../../src/tools/umzug');

const data = {
    name: 'ROLE_TEST01'
}

describe('Authority', function () {

    before(async () => {
        await up();
    });


    describe('#create()', async function () {

        it(`should return contact with name '${data.name}'`, async function () {
            let authority = await Authority.create(data)

            assert.strictEqual(authority.name, data.name);
        });

    });

    describe('#find()', async function () {

        it(`should return 1 contact`, async function () {
            let authorities = await Authority.findAll();
            assert.strictEqual(authorities.length, 1);
        });


    });
});