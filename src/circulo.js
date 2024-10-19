const circulo = (raio) => {
  const pi = 3.14159
  const areaTotal = pi * (raio ** 2)

  return areaTotal.toFixed(3)
}

module.exports = circulo