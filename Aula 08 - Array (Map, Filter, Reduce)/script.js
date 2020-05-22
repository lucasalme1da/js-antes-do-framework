const precos = [
	"Crédito",
	"R$ 200",
	"R$ 400",
	"Contas a pagar",
	"R$ 300",
	"R$ 400",
	"Meus dados"
]

const precosFiltro = precos.filter(preco => preco.includes("R$"))

// const precosNumeros = precosFiltro.map(preco => +preco.replace("R$ ", ""))

const precosNumeros = precosFiltro.map(preco => Number(preco.replace("R$ ", "")))

const total = precosNumeros.reduce((acc, item) => acc + item)

console.log(total)

