const tableName = 'sec_authority';

module.exports = {
    up: async (queryInterface) => {

        let authorities = [
            { 'name': 'USER_VIEW' },
            { 'name': 'USER_EDIT' },
            { 'name': 'POST_VIEW' },
            { 'name': 'POST_EDIT' },
            { 'name': 'TAG_VIEW' },
            { 'name': 'TAG_EDIT' }
        ];
        await queryInterface.bulkInsert(tableName, authorities, {});

    },

    down: async (queryInterface) => {

        await queryInterface.bulkDelete(tableName, null, {});

    }
};

