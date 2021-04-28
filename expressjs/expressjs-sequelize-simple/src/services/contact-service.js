const { Contact } = require('../models/index');


async function findAll() {
    return await Contact.findAll();
}

module.exports = {
    findAll
};