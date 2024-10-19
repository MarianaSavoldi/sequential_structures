const consumo = (distanciaPercorrida, combustivelGasto) => {
  const consumoMedio = distanciaPercorrida / combustivelGasto

  return `Consumo medio = ${consumoMedio.toFixed(3)}`
}

module.exports = consumo