const config = require('config')

const configDatabase = config.get('App.database')

module.exports = {
  type: configDatabase.get('type'),
  host: configDatabase.get('host'),
  port: configDatabase.get('port'),
  username: configDatabase.get('username'),
  password: configDatabase.get('password'),
  database: configDatabase.get('database'),
  synchronize: true,
  logging: false,
  entities: [
    'src/data/entity/**/*.{ts,js}'
  ],
  migrations: [
    'src/data/migration/**/*.ts'
  ],
  subscribers: [
    'src/data/subscriber/**/*.ts'
  ],
  cli: {
    entitiesDir: 'src/data/entity',
    migrationsDir: 'src/data/migration',
    subscribersDir: 'src/data/subscriber'
  }

}
