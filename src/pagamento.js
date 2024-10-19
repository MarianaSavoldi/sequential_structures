const pagamento = (funcionario) => {
  const {nome, horasTrabalhadas, valorHora} = funcionario
  const pagamentoTotal = horasTrabalhadas * valorHora

  return `O pagamento para ${nome} deve ser ${pagamentoTotal.toFixed(2)}`
}

module.exports = pagamento