const { Op } = require('sequelize');
const { Contact } = require('../models/index');
const PAGE_SIZE = 5


async function findAndCountAll(keyword, page) {
    let params = { order: [['name', 'ASC']] };
    setWhere(params, keyword);
    setLimitOffset(params, page)

    return await Contact.findAndCountAll(params);
}

async function findOne(req) {
    return await Authority.findOne({
        where: { id: req.params.id }
    });
}

function setWhere(params, keyword) {
    if (keyword && keyword.length > 0) {
        params.where = {
            name: {
                [Op.substring]: keyword
            }
        }
    }
}

function setLimitOffset(params, page) {
    params.limit = PAGE_SIZE;

    if (Number.isInteger(page) && page > 0) {
        params.offset = (page - 1) * PAGE_SIZE;
    } else {
        params.offset = 0;
    }
}

module.exports = {
    findAndCountAll,
    findOne
};