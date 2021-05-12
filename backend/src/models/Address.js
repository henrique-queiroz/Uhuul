const database = require('../database/database')

class Address {
    async create(data) {
        try {

            const lastId = await database.insert(data).table('address')
            return { status: true, msg: 'Endereço inserido', lastId }

        } catch (error) {

            return { status: false, msg: 'Cadastro de endereço não pôde ser concluído', error }

        }
    }

    async update(id, data) {
        try {
            await database('address').where({ id }).update(data)
            return { status: true, msg: 'Atualização feita' }
        } catch (error) {
            return { status: false, msg: 'Atualização não pode ser feita', error }
        }
    }

}

module.exports = new Address()