const circulo = require('../src/circulo')

describe('Testes circulo', () => {
  it('retorna o valor esperado quando o cálculo é executado', () => {
    const raio = 13.2

    const resultado = circulo(raio)
    expect(resultado).toBe('547.391')
  });
});