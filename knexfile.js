// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/vehicles.db3'
    },
    useNullAsDefault: true
  },

  migrations: {
    directory: './migrations'
  }

};
