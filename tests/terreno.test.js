const terreno = require('../src/terreno')

const areaTerreno = 300.00
const precoTerreno = 60000.00

const resultadoFrase = `Area do terreno = ${areaTerreno.toFixed(2)}
  Preco do terreno = ${precoTerreno.toFixed(2)}`

describe('Testes terreno', () => {
  it('retorna o valor correto ao executar o cálculo', () => {
    const largura = 10
    const comprimento = 30
    const valorM2 = 200
    
    const resultado = terreno(largura, comprimento, valorM2)

    expect(resultado).toBe(resultadoFrase)
  })
})