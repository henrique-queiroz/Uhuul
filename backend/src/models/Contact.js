const database = require('../database/database')

class Contact {
    async create(data) {
        try {

            const lastId = await database.insert(data).table('contact')
            return { status: true, msg: 'Contato inserida', lastId }

        } catch (error) {

            return { status: false, msg: 'Cadastro de contato não pôde ser concluído', error }

        }
    }

    async update(id, data) {
        try {
            await database('contact').where({ id }).update(data)
            return { status: true, msg: 'Atualização feita' }
        } catch (error) {
            return { status: false, msg: 'Atualização não pode ser feita', error }
        }
    }

}

module.exports = new Contact()