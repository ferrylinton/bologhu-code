const { assert } = require('chai');
const { Contact } = require('../../src/models/index');
const { migrate, seed } = require('../../src/tools/umzug');

describe('Contact', function () {

    before(async () => {
        await migrate();
        await seed();
    });


    describe('#count()', function () {

        it(`should return list of contacts`, async function () {
            let contacts = await Contact.findAll();
            assert.isArray(contacts);
            assert.isAbove(contacts.length, 0);
        });

    });
});