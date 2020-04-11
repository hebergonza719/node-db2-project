// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      // this sets up the db3 file
      filename: './data/car-dealer.db3'
    },
    useNullAsDefault: true,

    migrations: {
      directory: './data/migrations'
    }
  }

};
