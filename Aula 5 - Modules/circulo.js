import numeroAleatorio from "./numeroAleatorio.js"

function area(raio) {
	return Math.PI * raio * raio
}

function circunferencia(raio) {
	return Math.PI * raio * 2
}

function aleatorio() {
	return numeroAleatorio
}

const Circulo = {
	area,
	circunferencia,
	aleatorio
}

export default Circulo