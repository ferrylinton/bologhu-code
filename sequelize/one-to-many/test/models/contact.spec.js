const assert = require('assert');
const faker = require('faker');
const { Contact } = require('../../src/models/index');
const { up } = require('../../src/tools/umzug');

const data = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    status: faker.datatype.boolean(),
    created_at: faker.date.recent()
}

describe('Contact', function () {

    before(async () => {
        await up();
    });


    describe('#create()', async function () {

        it(`should return contact with name equals '${data.name}'`, async function () {
            let contact = await Contact.create(data)

            assert.strictEqual(contact.name, data.name);
        });

    });

    describe('#find()', async function () {

        it(`should return 1 contact`, async function () {
            let contacts = await Contact.findAll();
            assert.strictEqual(contacts.length, 1);
        });


    });
});