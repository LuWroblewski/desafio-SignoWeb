const router = require('express').Router()
const { connection, transporter } = require("./db.js")
var mysql = require('mysql2');



router.get("/view", async (req, res) => {
  try {
    connection.query('SELECT * FROM cliente',
    function( results, fields, value) {
      console.log(fields); 

      res.status(201).json({ message: 'vizualização aceita ', clientes: fields  }),console.log("view");
    })
  } catch (error) {
    res.status(500).json({ error: error, }, console.log(error))
  }

});


//inserção de dados
router.post("/insert", async (req, res) => {

  const { nome, telefone, email, logradouro, bairro, cep, cidade, estado, tipoRevista, quantidade, atracao, imagem } = req.body

  transporter.sendMail({
    from: "Lu <**INSIRA AQUI SEU EMAIL**>",
    to: `${email}, teste@signoweb.com.br`,
subject: "Solicitação cliente",
text: `Nome do cliente:${nome},
Telefone do cliente: ${telefone},
Email do cliente: ${email},
Rua do cliente: ${logradouro},
Bairro do cliente: ${bairro},
Cep do cliente: ${cep},
Cidade do cliente: ${cidade},
Estado do cliente: ${estado},
Tipo revista do cliente:  ${tipoRevista},
Quantidade do cliente: ${quantidade},
Atração do cliente:  ${atracao},
Imagem do cliente:  ${imagem}`

}).then(message =>{
console.log(message)
}).catch(err =>{
    console.log(err)
})

  let sql = `INSERT INTO cliente (nome, telefone, email,logradouro, bairro,  cep, cidade,  estado,  tipoRevista, quantidade, atracao, imagem) VALUES ('${nome}', '${telefone}','${email}','${logradouro}','${bairro}','${cep}', '${cidade}','${estado}','${tipoRevista}','${quantidade}','${atracao}','${imagem}')`
  try {
    connection.query(sql),
      res.status(201).json({ message: 'Pedido inserido no sistema ' }), console.log("Inserido");
  } catch (error) {
    res.status(500).json({ error: error, }, console.log(error))
  }


});


router.delete('/delete', async (req, res) => {
const{idclientes} = req.body

    try {
      connection.query(`DELETE FROM cliente WHERE idclientes='${idclientes}'`),
      res.status(200).json({ message: 'delete feito com sucesso' }), console.log("Deletado");
      
    } catch (error) {
      res.status(500).json({ error: error })

  }



})

router.patch('/atualiza', async (req, res) => {

  const {idclientes, nome, telefone, email, logradouro, bairro, cep, cidade, estado, tipoRevista, quantidade, atracao, imagem } = req.body


    let sql = (`UPDATE cliente SET nome = '${nome}', telefone= '${telefone}', email= '${email}',logradouro = '${logradouro}', bairro = '${bairro}',  cep = '${cep}', cidade = '${cidade}',  estado = '${estado}',  tipoRevista = '${tipoRevista}', quantidade = '${quantidade}', atracao = '${atracao}', imagem = '${imagem}' WHERE  idclientes='${idclientes}'`);
    try {
      connection.query(sql),
        res.status(201).json({ message: 'Pedido atualizado no sistema ' }), console.log("Atualizado");
    }  catch (error) {
      res.status(500).json({ error: error })
  }

})

module.exports = router;
