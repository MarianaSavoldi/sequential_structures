const troco = (precoUnitario, quantidadeComprada, dinheiroRecebido) => {
  const precoTotal = precoUnitario * quantidadeComprada
  const dinheiroDevolver = dinheiroRecebido - precoTotal
  
  return dinheiroDevolver.toFixed(2)
}

module.exports = troco