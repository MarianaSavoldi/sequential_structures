const idades = (pessoaUm, pessoaDois) => {
  const mediaIdades = (pessoaUm.idade + pessoaDois.idade) / 2

  return `A idade média de ${pessoaUm.nome} e ${pessoaDois.nome} é de ${mediaIdades} anos`
}

module.exports = idades