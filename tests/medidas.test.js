const medidas = require('../src/medidas')

const resultadoFrase = `AREA DO QUADRADO = 50.8369
AREA DO TRIANGULO = 28.6983
AREA DO TRAPEZIO = 90.4121`

describe('Testes medidas', () => {
  it('retorna os valores esperados quando o cálculo é executado', () => {
    const a = 7.13
    const b = 8.05
    const c = 11.912

    const resultado = medidas(a, b, c)
    expect(resultado).toBe(resultadoFrase)
  });
});