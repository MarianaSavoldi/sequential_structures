const soma = require('../src/soma')

describe('Testes soma', () => {
  it('retorna o valor correto quando o cálculo é executado', () => {
    const x = 8
    const y = 10

    const resultado = soma(x, y)
    expect(resultado).toBe(18)
  });
});