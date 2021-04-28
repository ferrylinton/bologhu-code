const path = require('path');
const Umzug = require('umzug');
const { Sequelize, sequelize } = require('../models/index');

const migrateUmzug = new Umzug({
    migrations: {
        path: path.join(__dirname, '/../db/migrations'),
        pattern: /\.js$/,
        params: [
            sequelize.getQueryInterface(),
            Sequelize
        ]
    },
    storage: 'sequelize',
    storageOptions: {
        sequelize: sequelize,
        tableName: 'sequelize_meta',
    },
    logging: false
});

const seedUmzug = new Umzug({
    migrations: {
        path: path.join(__dirname, '/../db/seeders'),
        pattern: /\.js$/,
        params: [
            sequelize.getQueryInterface(),
            Sequelize
        ]
    },
    storage: 'sequelize',
    storageOptions: {
        sequelize: sequelize,
        tableName: 'sequelize_data',
    },
    logging: false
});

async function migrate() {
    await migrateUmzug.up();
}

async function seed() {
    await seedUmzug.up();
}

module.exports = {
    migrate,
    seed
}