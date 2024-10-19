const troco = require('../src/troco')

describe('Testes troco', () => {
  it('retorna o valor esperado quando o cálculo é executado', () => {
    const precoUnitario = 8
    const quantidadeComprada = 2
    const dinheiroRecebido = 20

    const resultado = troco(precoUnitario, quantidadeComprada, dinheiroRecebido)
    expect(resultado).toBe('4.00')
  });
});