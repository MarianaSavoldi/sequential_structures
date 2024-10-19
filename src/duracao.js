const duracao = (segundosTotais) => {
  const horas = Math.floor(segundosTotais / 3600) // converte os segundos em horas
  const minutos = Math.floor((segundosTotais - (horas * 3600)) / 60) // calcula o "resto" das horas em segundos e converte em minutos
  const segundos = segundosTotais - (horas * 3600) - (minutos * 60) // calcula o que sobra em segundos

  return `${horas}:${minutos}:${segundos}`

}

// console.log(duracao(43260))

module.exports = duracao