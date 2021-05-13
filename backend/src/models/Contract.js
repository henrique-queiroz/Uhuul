const database = require('../database/database')

class Contract {

    async create(data) {
        try {
    
          await database.insert(data).table('contracts')
          return { status: true, msg: 'Contrato estabelecido com sucesso' }
    
        } catch (error) {
    
          return { status: false, msg: 'Contrato não pode ser criado', error }
    
        }
    }

    async getAll() {
        try {
    
          const data = await database('contracts').innerJoin('clients', 'contracts.id', '=', 'clients.id').innerJoin('providers', 'contracts.id', '=', 'providers.id').innerJoin('events', 'contracts.id', '=', 'events.id')
          return { status: true, data }
    
        } catch (error) {
          return { status: false, msg: 'Consulta não pôde ser feita', error }
        }
    }
    
    async getSingle(id) {
        try {
          const data = await database.select('*').table('contracts').where('id', '=', id).innerJoin('clients', 'contracts.id', '=', 'clients.id').innerJoin('providers', 'contracts.id', '=', 'providers.id').innerJoin('events', 'contracts.id', '=', 'events.id')
          return { status: true, data }
        } catch {
          return { status: false, msg: 'Consulta não pôde ser feita', error }
        }
    }

    async delete(id) {
        try {
          const result = await database('events').where({ id }).del()
          return { status: true, msg: 'Exclusão feita' }
        } catch (error) {
          return { status: false, msg: 'Exclusão não pode ser feita', error }
        }
    }

}

module.exports = new Contract()