const duracao = require('../src/duracao')

describe('Testes duracao', () => {
  describe('retorna o valor no formato esperado quando a função é executada', () => {
    it('Exemplo 1', () => {
      const segundosTotais = 300
  
      const resultado = duracao(segundosTotais)
      expect(resultado).toBe('0:5:0')
    });

    it('Exemplo 2', () => {
      const segundosTotais = 12506
  
      const resultado = duracao(segundosTotais)
      expect(resultado).toBe('3:28:26')
    });

    it('Exemplo 3', () => {
      const segundosTotais = 140811
  
      const resultado = duracao(segundosTotais)
      expect(resultado).toBe('39:6:51')
    });
  });
});