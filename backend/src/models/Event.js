const database = require('../database/database')

class Event {

    async create(data) {
        try {
    
          await database.insert(data).table('event')
          return { status: true, msg: 'Evento criado com sucesso' }
    
        } catch (error) {
    
          return { status: false, msg: 'Evento não pode ser criado', error }
    
        }
    }

    async getAll() {
        try {
    
          const data = await database('events').innerJoin('clients', 'events.id', '=', 'clients.id')
          return { status: true, data }
    
        } catch (error) {
          return { status: false, msg: 'Consulta não pôde ser feita', error }
        }
    }
    
    async getSingle(id) {
        try {
          const data = await database.select('*').table('events').where('id', '=', id).innerJoin('clients', 'events.id', '=', 'clients.id')
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

module.exports = new Event()