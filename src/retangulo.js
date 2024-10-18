const retangulo = (base, altura) => {
  const area = base * altura
  const perimetro = (base * 2) + (altura * 2)
  const diagonal = Math.hypot(base, altura)

  return (
    `AREA = ${area.toFixed(4)}
    PERIMETRO = ${perimetro.toFixed(4)}
    DIAGONAL = ${diagonal.toFixed(4)}`
  )
}

module.exports = retangulo