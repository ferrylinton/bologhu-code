const { QueryTypes } = require('sequelize');
const tableName = 'sec_role_authority';

module.exports = {
    up: async (queryInterface) => {

        let data = {};

        var authorities = await queryInterface.sequelize.query("SELECT * from sec_authority", { type: QueryTypes.SELECT });
        for (let i = 0; i < authorities.length; i++) {
            data[authorities[i].name] = authorities[i].id;
        }

        var roles = await queryInterface.sequelize.query("SELECT * from sec_role", { type: QueryTypes.SELECT });
        for (let i = 0; i < roles.length; i++) {
            data[roles[i].name] = roles[i].id;
        }

        let adminAuthorities = [
            { 'role_id': data.ADMIN , 'authority_id': data.USER_VIEW},
            { 'role_id': data.ADMIN , 'authority_id': data.USER_EDIT},
            { 'role_id': data.ADMIN , 'authority_id': data.POST_VIEW},
            { 'role_id': data.ADMIN , 'authority_id': data.POST_EDIT},
            { 'role_id': data.ADMIN , 'authority_id': data.TAG_VIEW},
            { 'role_id': data.ADMIN , 'authority_id': data.TAG_EDIT}
        ];

        let aserAuthorities = [
            { 'role_id': data.USER , 'authority_id': data.USER_VIEW},
            { 'role_id': data.USER , 'authority_id': data.POST_VIEW},
            { 'role_id': data.USER , 'authority_id': data.POST_EDIT},
            { 'role_id': data.USER , 'authority_id': data.TAG_VIEW},
            { 'role_id': data.USER , 'authority_id': data.TAG_EDIT}
        ];

        let guestAuthorities = [
            { 'role_id': data.GUEST , 'authority_id': data.USER_VIEW},
            { 'role_id': data.GUEST , 'authority_id': data.POST_VIEW},
            { 'role_id': data.GUEST , 'authority_id': data.TAG_VIEW}
        ];

        await queryInterface.bulkInsert(tableName, adminAuthorities, {});
        await queryInterface.bulkInsert(tableName, aserAuthorities, {});
        await queryInterface.bulkInsert(tableName, guestAuthorities, {});

    },

    down: async (queryInterface) => {

        await queryInterface.bulkDelete(tableName, null, {});

    }
};

