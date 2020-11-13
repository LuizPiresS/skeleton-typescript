import supertest from 'supertest'

import connection from '../src/data/databaseConnection'
import { SetupServer } from '../src/server'

let server: SetupServer
beforeAll(async () => {
  server = new SetupServer()
  await server.init()
  global.testRequest = supertest(server.getApp())
  connection.create()
})

afterAll(async () => {
  await server.close()
  await connection.close()
})

beforeEach(async () => {
  await connection.clear()
})
