const database = require('../database/database')

class Provider {
    async create(data) {
      try {

        await database.insert(data).table('providers')
        return { status: true, msg: 'Fornecedor criado com sucesso' }

      } catch (error) {

        return { status: false, msg: 'Fornecedor não pode ser criado', error }

      }
    }

    async userExists(cnpj) {
      try {
  
        const provider = await database('providers').where({ cnpj }).select()
        console.log(provider);
        if (provider.length > 0) return true
  
        return false
  
      } catch (error) {
  
        return { status: false, msg: 'Consulta não pôde ser concluída', error }
  
      }
    }

    async getAll() {
      try {
  
        const data = await database('providers').innerJoin('address', 'providers.id', '=', 'address.id').innerJoin('contact', 'providers.id', '=', 'contact.id')
        return { status: true, data }
  
      } catch (error) {
        return { status: false, msg: 'Consulta não pôde ser feita', error }
      }
    }
  
    async getSingle(id) {
      try {
        const data = await database.select('*').table('providers').where('id', '=', id).innerJoin('address', 'providers.id', '=', 'address.id').innerJoin('contact', 'providers.id', '=', 'contact.id')
        return { status: true, data }
      } catch {
        return { status: false, msg: 'Consulta não pôde ser feita', error }
      }
    }

    async delete(id) {
        try {
          const result = await database('providers').where({ id }).del()
          return { status: true, msg: 'Exclusão feita' }
        } catch (error) {
          return { status: false, msg: 'Exclusão não pode ser feita', error }
        }
    }
}

module.exports = new Provider()