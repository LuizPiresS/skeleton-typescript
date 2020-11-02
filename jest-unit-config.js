const config = require('./jest.config') // Inclui o arquivo de configuração geral
config.testMatch = ['<rootDir>/src/**/*.test.ts'] // Roda apenas os testes que estivem com a extensão .test.ts
config.displayName = 'test-unit' // Nome dos testes que aparecerá no terminal quando o teste rodar

module.exports = config
