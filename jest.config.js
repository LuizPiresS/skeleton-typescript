const { resolve } = require('path')
const root = resolve(__dirname)
module.exports = {
  rootDir: root,
  testEnvironment: 'node',
  clearMocks: true, // Limpa os mocks depois de executar cada teste
  preset: 'ts-jest' // Preset para que o jest rode com arquivos .ts
}
