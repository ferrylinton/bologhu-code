const tableName = 'sec_role';

module.exports = {
    up: async (queryInterface) => {

        let authorities = [
            { 'name': 'ADMIN' },
            { 'name': 'USER' },
            { 'name': 'GUEST' }
        ];
        await queryInterface.bulkInsert(tableName, authorities, {});

    },

    down: async (queryInterface) => {

        await queryInterface.bulkDelete(tableName, null, {});

    }
};

