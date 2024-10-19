const consumo = require('../src/consumo')

describe('Testes consumo', () => {
  it('retorna o valor esperado quando o cálculo é executado', () => {
    const distanciaPercorrida = 1108
    const combustivelGasto = 71.4

    const resultado = consumo(distanciaPercorrida, combustivelGasto)
    expect(resultado).toBe('Consumo medio = 15.518')
  });
});