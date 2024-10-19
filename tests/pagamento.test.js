const pagamento = require('../src/pagamento')

describe('Testes pagamento', () => {
  it('retorna o valor esperado quando o cálculo é executado', () => {
    const funcionario = {
      nome: "Joao Silva",
      horasTrabalhadas: 60,
      valorHora: 50.00,
    }

    const resultado = pagamento(funcionario)
    expect(resultado).toBe('O pagamento para Joao Silva deve ser 3000.00')
  });
});