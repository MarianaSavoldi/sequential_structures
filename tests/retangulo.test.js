const retangulo = require('../src/retangulo')

const areaRetangulo = 20.0000
const perimetroRetangulo = 18.0000
const diagonalRetangulo = 6.4031

const resultadoFrase = (
  `AREA = ${areaRetangulo.toFixed(4)}
    PERIMETRO = ${perimetroRetangulo.toFixed(4)}
    DIAGONAL = ${diagonalRetangulo.toFixed(4)}`)

describe('Testes retangulo', () => {
  it('retorna o valor correto ao executar o cálculo', () => {
    const base = 4
    const altura = 5
    
    const resultado = retangulo(base, altura)

    expect(resultado).toBe(resultadoFrase)
  })
})