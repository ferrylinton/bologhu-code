const path = require('path');
const Umzug = require('umzug');
const { Sequelize, sequelize } = require('../models/index');

const umzug = new Umzug({
    migrations: {
        path: path.join(process.cwd(), 'src', 'db', 'migrations'),
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

async function up() {
    await umzug.up();
}

module.exports = {
    up
}