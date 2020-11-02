const config = require('./jest.config') // Inclui o arquivo de configuração geral
config.testMatch = ['<rootDir>/src/**/*.end2end.ts'] // Roda apenas os testes que estivem com a extensão .end2end.ts
config.setupFilesAfterEnv = ['<rootDir>/src/jest-config/jest-setup.ts'] // Arquivo que sobe o banco de dados e outras variaveis globais para teste
config.displayName = 'end2end-test' // Nome dos testes que aparecerá no terminal quando o teste rodar

module.exports = config
