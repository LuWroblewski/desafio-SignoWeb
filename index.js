let button5 = document.getElementById("button5");
let button7 = document.getElementById("button7");
let button13 = document.getElementById("button13");

const idCliente = document.getElementById("idCliente");
const nome = document.getElementById("nome");
const telefone = document.getElementById("telefone");
const email = document.getElementById("email");
const cidade = document.getElementById("cidade");
const bairro = document.getElementById("bairro");
const CEP = document.getElementById("CEP");
const estado = document.getElementById("estado");
const logradouro = document.getElementById("logradouro");
const tipoRevista = document.getElementById("tipoRevista");
const quantidade = document.getElementById("quantidade");
const atracao = document.getElementById("atracao");
const imagem = document.getElementById("imagem");


const idClienteUp = document.getElementById("idClienteUp");
const nomeUp = document.getElementById("nomeUp");
const telefoneUp = document.getElementById("telefoneUp");
const emailUp = document.getElementById("emailUp");
const cidadeUp = document.getElementById("cidadeUp");
const bairroUp = document.getElementById("bairroUp");
const CEPUp = document.getElementById("CEPUp");
const estadoUp = document.getElementById("estadoUp");
const logradouroUp = document.getElementById("logradouroUp");
const tipoRevistaUp = document.getElementById("tipoRevistaUp");
const quantidadeUp = document.getElementById("quantidadeUp");
const atracaoUp = document.getElementById("atracaoUp");
const imagemUp = document.getElementById("imagemUp");


button5.onclick = function (e) {
    e.preventDefault()

    console.log("clicou")
    const nomeData = nome.value
    const telData = telefone.value
    const emailData = email.value
    const cityData = cidade.value
    const bairroData = bairro.value
    const estadoData = estado.value
    const CEPData = CEP.value
    const ruaData = logradouro.value
    const revistaData = tipoRevista.value
    const quantiaData = quantidade.value
    const atracaoData = atracao.value
    const imagemData = imagem.value

    localStorage.setItem('nomeData', `${nomeData}`)
    localStorage.setItem('telData', `${telData}`)
    localStorage.setItem('emailData', `${emailData}`)
    localStorage.setItem('cityData', `${cityData}`)
    localStorage.setItem('bairroData', `${bairroData}`)
    localStorage.setItem('estadoData', `${estadoData}`)
    localStorage.setItem('CEPData', `${CEPData}`)
    localStorage.setItem('ruaData', `${ruaData}`)
    localStorage.setItem('revistaData', `${revistaData}`)
    localStorage.setItem('quantiaData', `${quantiaData}`)
    localStorage.setItem('atracaoData', `${atracaoData}`)
    localStorage.setItem('imagemData', `${imagemData}`)

    const nomeFetch = localStorage.getItem('nomeData')
    const telFetch = localStorage.getItem('telData')
    const emailFetch = localStorage.getItem('emailData')
    const cityFetch = localStorage.getItem('cityData')
    const bairroFetch = localStorage.getItem('bairroData')
    const estadoFetch = localStorage.getItem('estadoData')
    const cepFetch = localStorage.getItem('CEPData')
    const ruaFetch = localStorage.getItem('ruaData')
    const revistaFetch = localStorage.getItem('revistaData')
    const quantiaFetch = localStorage.getItem('quantiaData')
    const atracaoFetch = localStorage.getItem('atracaoData')
    const imagemFetch = localStorage.getItem('imagemData')

    fetch("http://localhost:3000/cliente/insert", {
        method: 'POST',
        headers: {
            "content-type": "application/json",
          },
        body: JSON.stringify({
            nome: nomeFetch,
            telefone: telFetch,
            email: emailFetch,
            logradouro: ruaFetch,
            bairro: bairroFetch,
            cep: cepFetch,
            cidade: cityFetch,
            estado: estadoFetch,
            tipoRevista: revistaFetch,
            quantidade: quantiaFetch,
            atracao: atracaoFetch,
            imagem: imagemFetch
        }),
    })
    alert("Pedido enviado com sucesso")
    adicionar.style.left = "450px"
    adicionar2.style.left = "450px"
    adicionar3.style.left = "450px"
    menu.style.left = "5px"
}
button7.onclick = function (e) {
    e.preventDefault()

    console.log("clicou")

    const clienteData = idCliente.value
    localStorage.setItem('clienteData', `${clienteData}`)
    const clienteFetch = localStorage.getItem('clienteData')

    fetch("http://localhost:3000/cliente/delete", {
        method: 'DELETE',
        headers: {
            "content-type": "application/json",
          },
        body: JSON.stringify({
            idclientes: clienteFetch,
        }),
    })
    alert("Pedido removido com sucesso")
    remover.style.left = "450px"
    menu.style.left = "5px"
}


button13.onclick = function (e) {
e.preventDefault()
    console.log("clicou")

    const clienteData = idClienteUp.value
    const nomeData = nomeUp.value
    const telData = telefoneUp.value
    const emailData = emailUp.value
    const cityData = cidadeUp.value
    const bairroData = bairroUp.value
    const estadoData = estadoUp.value
    const CEPData = CEPUp.value
    const ruaData = logradouroUp.value
    const revistaData = tipoRevistaUp.value
    const quantiaData = quantidadeUp.value
    const atracaoData = atracaoUp.value
    const imagemData = imagemUp.value

    localStorage.setItem('clienteData', `${clienteData}`)
    localStorage.setItem('nomeData', `${nomeData}`)
    localStorage.setItem('telData', `${telData}`)
    localStorage.setItem('emailData', `${emailData}`)
    localStorage.setItem('cityData', `${cityData}`)
    localStorage.setItem('bairroData', `${bairroData}`)
    localStorage.setItem('estadoData', `${estadoData}`)
    localStorage.setItem('CEPData', `${CEPData}`)
    localStorage.setItem('ruaData', `${ruaData}`)
    localStorage.setItem('revistaData', `${revistaData}`)
    localStorage.setItem('quantiaData', `${quantiaData}`)
    localStorage.setItem('atracaoData', `${atracaoData}`)
    localStorage.setItem('imagemData', `${imagemData}`)

    const nomeFetch = localStorage.getItem('nomeData')
    const telFetch = localStorage.getItem('telData')
    const emailFetch = localStorage.getItem('emailData')
    const cityFetch = localStorage.getItem('cityData')
    const bairroFetch = localStorage.getItem('bairroData')
    const estadoFetch = localStorage.getItem('estadoData')
    const cepFetch = localStorage.getItem('CEPData')
    const ruaFetch = localStorage.getItem('ruaData')
    const revistaFetch = localStorage.getItem('revistaData')
    const quantiaFetch = localStorage.getItem('quantiaData')
    const atracaoFetch = localStorage.getItem('atracaoData')
    const imagemFetch = localStorage.getItem('imagemData')
    const clienteFetch = localStorage.getItem('clienteData')

    fetch("http://localhost:3000/cliente/atualiza", {
        method: 'PATCH',
        headers: {
            "content-type": "application/json",
          },
        body: JSON.stringify({
            idclientes: clienteFetch,
            nome: nomeFetch,
            telefone: telFetch,
            email: emailFetch,
            logradouro: ruaFetch,
            bairro: bairroFetch,
            cep: cepFetch,
            cidade: cityFetch,
            estado: estadoFetch,
            tipoRevista: revistaFetch,
            quantidade: quantiaFetch,
            atracao: atracaoFetch,
            imagem: imagemFetch
        }),
    })
    alert("Mudança enviada com sucesso")
    update.style.left = "450px"
    update2.style.left = "450px"
    update3.style.left = "450px"
    menu.style.left = "5px"
}


async function getAllPosts() {
  const response = await fetch("http://localhost:3000/cliente/view");

  console.log(response);

  const data = await response.json();

  console.log(data);

  data.clientes.map((post) => {
    const tr = document.createElement("tr")

    const idclientes = document.createElement("td");
    const nome = document.createElement("td");
    const telefone = document.createElement("td");


    idclientes.innerText = post.idclientes;
    nome.innerText = post.nome;
    telefone.innerText = post.telefone;

    tr.appendChild(idclientes);
    tr.appendChild(nome);
    tr.appendChild(telefone);

    vizualizar.appendChild(tr);


  });
}
getAllPosts()

