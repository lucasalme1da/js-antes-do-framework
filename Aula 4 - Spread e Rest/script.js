// REST

// function showList(empresa, ...clientes) {
// 	console.log(empresa);
// 	console.log(clientes);
// }

// showList('origamid', 'joao', 'maria', 10)

// SPREAD

// const numeros = [1, 2, 4, 29, 32, 2, 45, 3]

// // console.log(Math.max(...numeros));

// // const itens = Array.from(document.querySelectorAll('li'))
// const itens = [...document.querySelectorAll('li')]

// console.log(itens);

// Clonando objetos

// const carro = {
// 	cor: "azul",
// 	portas: 4,
// 	ano: 2020
// }

// const cloneCarro = { ...carro, turbo: true }

// console.log(cloneCarro);


class Transporte {
	constructor() {
		this._terrestre = true
	}
	andar() {
		console.log('Andou...');

	}
}

class Carro extends Transporte {
	constructor(cor, portas) {
		super()
		this._cor = cor
		this._portas = portas
	}
}

const carro = new Carro('vermelho', 4)

const cloneCarro = { ...carro }

console.log(carro);
console.log(cloneCarro);













