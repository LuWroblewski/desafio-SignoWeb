# desafio-SignoWeb

Para usar baixe tudo e em alguma das paginas abra o terminal e escreva: npm init -y, após isso instale as bibliotecas escrevendo: mysql2 nodemon express cors
Será criado um documento chamado package.json, na area de "scripts" adicione uma linha escrevendo o seguinte: "start": "nodemon ./db.js"

Após isso o sistema estará funcionando porém sem configurar o email, para  configurar o email acesse db.js e escreva um user e um pass para que envie o email,
após isso siga para clientRoute.js e mude o "from" adicionando o mesmo email escrito no db.js
