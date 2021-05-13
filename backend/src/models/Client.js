const database = require('../database/database')

class Client {

  async create(data) {
    try {

      await database.insert(data).table('clients')
      return { status: true, msg: 'Cliente criado com sucesso' }

    } catch (error) {

      return { status: false, msg: 'Cadastro não pôde ser concluído', error }

    }
  }

  async userExists(cpf, rg, email) {
    try {

      const client = await database('clients').where({ cpf, rg, email }).select('id')

      if (client.length > 0) return true

      return false

    } catch (error) {

      return { status: false, msg: 'Consulta não pôde ser concluída', error }

    }
  }

  async getAll() {
    try {

      const data = await database('clients').innerJoin('address', 'clients.id', '=', 'address.id').innerJoin('contact', 'clients.id', '=', 'contact.id')
      return { status: true, data }

    } catch (error) {
      return { status: false, msg: 'Consulta não pôde ser feita', error }
    }
  }

  async getSingle(id) {
    try {
      const data = await database.select('*').table('clients').where('id', '=', id)
      return { status: true, data }
    } catch {
      return { status: false, msg: 'Consulta não pôde ser feita', error }
    }
  }

  async update(id, data) {
    try {
      await database('client').where({ id }).update(data)
      return { status: true, msg: 'Atualização feita' }
    } catch (error) {
      return { status: false, msg: 'Atualização não pode ser feita', error }
    }
  }

  async delete(id) {
    try {
      const result = await database('clients').where({ id }).del()
      return { status: true, msg: 'Exclusão feita' }
    } catch (error) {
      return { status: false, msg: 'Exclusão não pode ser feita', error }
    }
  }

  async findEmail(email) {
    try {
      const result = await database.select('email', 'password').where({email}).table('clients')
      return result;
    } catch (error) {
      return { status: false, msg: 'A procura não pôde ser feita', error }
    }
  }

}

module.exports = new Client()