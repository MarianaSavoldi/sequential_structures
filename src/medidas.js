const medidas = (a, b, c) => {
  const areaQuadrado = a ** 2
  const areaTriangulo = (a * b) / 2
  const areaTrapezio = ((a +b) * c) / 2

  return `AREA DO QUADRADO = ${areaQuadrado.toFixed(4)}
AREA DO TRIANGULO = ${areaTriangulo.toFixed(4)}
AREA DO TRAPEZIO = ${areaTrapezio.toFixed(4)}`
}

module.exports = medidas