const terreno = (largura, comprimento, valorM2) => {
  const areaTerreno = largura * comprimento
  const precoTerreno = areaTerreno * valorM2

  return `Area do terreno = ${areaTerreno.toFixed(2)}
  Preco do terreno = ${precoTerreno.toFixed(2)}`
}

// console.log('Exemplo 1: ', terreno(10, 30, 200))
/* Resultado:
Area do terreno = 300.00
Preco do terreno = 60000.00
*/

// console.log('Exemplo 2: ', terreno(12, 20, 150))
/* Resultado:
Area do terreno = 240.00
Preco do terreno = 36000.00
*/

module.exports = terreno