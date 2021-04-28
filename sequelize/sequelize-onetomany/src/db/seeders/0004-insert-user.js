const { QueryTypes } = require('sequelize');
const tableName = 'sec_user';

module.exports = {
    up: async (queryInterface) => {

        let data = {};

        var roles = await queryInterface.sequelize.query('SELECT * from sec_role', { type: QueryTypes.SELECT });
        for (let i = 0; i < roles.length; i++) {
            data[roles[i].name] = roles[i].id;
        }

        let users = [
            { username: 'admin01', role_id: data.ADMIN },
            { username: 'admin02', role_id: data.ADMIN },
            { username: 'user01', role_id: data.USER },
            { username: 'user02', role_id: data.USER },
            { username: 'user03', role_id: data.USER },
            { username: 'guest01', role_id: data.GUEST },
            { username: 'guest02', role_id: data.GUEST },
            { username: 'guest03', role_id: data.GUEST },
            { username: 'guest04', role_id: data.GUEST }
        ]

        await queryInterface.bulkInsert(tableName, users, {});

    },

    down: async (queryInterface) => {

        await queryInterface.bulkDelete(tableName, null, {});

    }
};

