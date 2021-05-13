const database = require('../database/database')

class Provider {
  async create(data) {
    try {

      await database.insert(data).table('provider');
      return { status: true, msg: 'Tabela inserida' }

    } catch (error) {

      return { status: false, msg: 'Cadastro não pôde ser concluído', error }

    }
  }

  async getAll() {
    try {

      const data = await database.select('*').table('clients')
      return { status: true, data }

    } catch (error) {
      return { status: false, msg: 'Consulta não pôde ser feita', error }
    }
  }

  async getSingle(id){
    try{
      const data = await database.select('*').table('clients').where('id', '=', id)
      return { status: true, data }
    } catch{
      return { status: false, msg: 'Consulta não pôde ser feita', error }
    }
  }

  async update(id, data) {
    try {
      await database('provider').where({ id }).update(data)
      return { status: true, msg: 'Atualização feita' }
    } catch (error) {
      return { status: false, msg: 'Atualização não pode ser feita', error }
    }
  }

  async delete(id){
    try{
      await database('provider').where({id}).del()
      return { status: true, msg: 'Exclusão feita' }
    } catch (error) {
      return { status: false, msg: 'Exclusão não pode ser feita', error }
    }
  }
}

module.exports = new Provider()