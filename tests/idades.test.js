const idades = require('../src/idades')

describe('Testes idades', () => {
  it('Exibe o resultado esperado quando o cálculo é executado', () => {
    const pessoaUm = {
      nome: "Maria Silva",
      idade: 19
    }
    const pessoaDois = {
      nome: "Joao Melo",
      idade: 20
    }

    const resultado = idades(pessoaUm, pessoaDois)

    expect(resultado).toBe('A idade média de Maria Silva e Joao Melo é de 19.5 anos')
  })
})