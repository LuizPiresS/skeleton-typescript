import config from 'config'

import { SetupServer } from './server'

(async (): Promise<void> => {
  try {
    const server = new SetupServer(config.get('App.port'))
    await server.init()
    server.start()
    console.log(`Servidor rodando na porta ${config.get('App.port')}`)
  } catch (error) {
    console.log(error)
  }
})()
