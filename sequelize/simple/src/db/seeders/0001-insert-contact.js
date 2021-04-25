const faker = require('faker');


module.exports = {
    up: async (queryInterface) => {

        for (let i = 1; i <= 10; i++) {
            let contacts = [];

            for (let j = 1; j <= 10; j++) {
                contacts.push({
                    name: faker.name.findName(),
                    email: faker.internet.email(),
                    phone: faker.phone.phoneNumber(),
                    status: faker.datatype.boolean(),
                    created_at: faker.date.recent()
                })
            }

            await queryInterface.bulkInsert('t_contact', contacts, {});

        }

    },

    down: async (queryInterface) => {

        await queryInterface.bulkDelete('t_contact', null, {});

    }
};

