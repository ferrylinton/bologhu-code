module.exports = {
  development: {
    dialect: 'sqlite',
    storage: 'db.sqlite',
    logging: console.log,
    define: {
      timestamps: false,
      underscored: true
    },
    dialectOptions: {
      bigNumberStrings: true
    },
    migrationStorage: 'sequelize',
    migrationStorageTableName: 'sequelize_meta',
    seederStorage: 'sequelize',
    seederStorageTableName: 'sequelize_data'
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false,
    define: {
      timestamps: false,
      underscored: true
    },
    dialectOptions: {
      bigNumberStrings: true
    },
    migrationStorage: 'sequelize',
    migrationStorageTableName: 'sequelize_meta',
    seederStorage: 'sequelize',
    seederStorageTableName: 'sequelize_data'
  }
};