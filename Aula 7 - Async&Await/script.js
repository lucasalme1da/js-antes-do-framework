// fetch("https://ranekapi.origamid.dev/wp-json/api/produto")
// 	.then(r => r.json())
// 	.then(jsonBody => {
// 		document.querySelector('#app').innerHTML = jsonBody[0].nome
// 		console.log(jsonBody);

// 	})

// const data = {
// 	id: "lucasalme1da",
// 	nome: "Lucas",
// 	email: "lucas@almeida.com",
// 	senha: "123456",
// 	cep: "20200200",
// 	rua: "Alfeneiros",
// 	numero: "4",
// 	bairro: "Little Whinging",
// 	cidade: "Londres",
// 	estado: "Reino Unido"
// }

// fetch("https://ranekapi.origamid.dev/wp-json/api/usuario", {
// 	method: "POST",
// 	headers: {
// 		"Content-Type": "application/json"
// 	},
// 	body: JSON.stringify(data)
// })

async function fetchProdutos(url) {
	const response = await fetch(url)
	const jsonBody = await response.json()
	return jsonBody
}

const requisicao = fetchProdutos("https://ranekapi.origamid.dev/wp-json/api/produto")

requisicao.then(r => console.log(r))
