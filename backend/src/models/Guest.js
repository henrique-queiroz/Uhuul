const database = require('../database/database')

class Event {

    async create(data) {
        try {
    
          await database.insert(data).table('guests')
          return { status: true, msg: 'Convidado criado com sucesso' }
    
        } catch (error) {
    
          return { status: false, msg: 'Convidado não pode ser criado', error }
    
        }
    }

    async getAll() {
        try {
    
          const data = await database('guests').innerJoin('clients', 'guests.id', '=', 'clients.id').innerJoin('events', 'guests.id', '=', 'events.id')
          return { status: true, data }
    
        } catch (error) {
          return { status: false, msg: 'Consulta não pôde ser feita', error }
        }
    }
    
    async getSingle(id) {
        try {
          const data = await database.select('*').table('guests').where('id', '=', id).innerJoin('clients', 'guests.id', '=', 'clients.id').innerJoin('events', 'guests.id', '=', 'events.id')
          return { status: true, data }
        } catch {
          return { status: false, msg: 'Consulta não pôde ser feita', error }
        }
    }

    async delete(id) {
        try {
          const result = await database('guests').where({ id }).del()
          return { status: true, msg: 'Exclusão feita' }
        } catch (error) {
          return { status: false, msg: 'Exclusão não pode ser feita', error }
        }
    }

}

module.exports = new Event()