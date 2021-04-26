const faker = require('faker');
const tableName = 't_contact';


module.exports = {

    up: async (queryInterface) => {

        let contacts = [];
        
        for (let i = 1; i <= 101; i++) {
            contacts.push({
                name: faker.name.findName(),
                created_at: faker.date.recent()
            })
        }

        await queryInterface.bulkInsert(tableName, contacts, {});

    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete(tableName, null, {});
    }

};

