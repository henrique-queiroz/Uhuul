const database = require('../database/database')

class Client {
  async create(data) {
    try {

      await database.insert(data).table('client');
      return { status: true, msg: 'Tabela inserida' }

    } catch (error) {

      return { status: false, msg: 'Cadastro não pôde ser concluído', error }

    }
  }
}

module.exports = new Client()