
<h1>Api of Uhuu</h1>

  

>  ## What should i do to run this **API**?


  
### On the database
- You must run the database.sql file to create all the tables requireds


### On the code editor
- Create a .env containing information about the database in the root of the backend folder

### On the comand line
`npm install`

*then run*

`npm start`

> have a great use

### On the entering data in client
# Api routes

## /clients

### get
- if it returns true, api return this:
{
  "status": true,
  "msg": "Tabela inserida"
}

- else:
{
  "status": false,
  "msg": "Cadastro não pôde ser concluído",
  "error": {
    "code": "ER_DUP_ENTRY",
    "errno": 1062,
    "sqlState": "23000",
    "sqlMessage": "Duplicate entry '11111111112' for key 'clients.cpf'"
  }
}

[  ] UPDATE CLIENTS

[  ] log int clients

[  ] PGDP PROVIDERS

[  ] eventos, contratos e convidados

[  ] implementar o jwt