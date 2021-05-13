const utils = require('../utils')

const Client = require('../models/Client')
const Address = require('../models/Address')
const Contact = require('../models/Contact')

class ClientController {

    async create(req, res) {

        const data = { ...req.body }

        const userExists = await Client.userExists(data.user.cpf, data.user.rg, data.user.email)

        if (!userExists) {

            const address = await Address.create(data.address)
            const contact = await Contact.create(data.contact)

            const clientInsertData = {
                ...data.user,
                address_id: address.lastId[0],
                contact_id: contact.lastId[0],
                password: utils.hashPassword(data.user.password)
            }

            const clientInsertResult = await Client.create(clientInsertData)

            if (clientInsertResult.status) {

                res.statusCode = 201
                res.json(clientInsertResult);

            } else {

                res.statusCode = 400
                res.json(clientInsertResult)

            }

        } else {

            res.statusCode = 400;
            res.json({
                status: false,
                msg: 'Usuário já existe'
            })

        }

    }

    async getAll(req, res) {
        try {
            const result = await Client.getAll();

            if (result.data.length > 0) {
                res.statusCode = 200
                res.json({
                    status: true,
                    data: result.data
                })
            } else if (result.data.length === 0) {
                res.statusCode = 404
                res.json({
                    status: true,
                    msg: 'Nenhum usuário registrado no banco de dados'
                })
            }
        } catch (error) {
            res.statusCode = 406
            res.json({
                status: false,
                msg: 'Algum erro aconteceu',
                error
            })
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id
            const result = await Client.delete(id)
            console.log(result);

            if (result.status) {
                res.statusCode = 200
                res.json({
                    status: true,
                    msg: 'Cliente excluído com sucesso'
                })
            } else {
                res.statusCode = 400
                res.json({
                    status: false,
                    msg: 'Não foi possível exluir cliente'
                })
            }
        } catch (error) {

        }
    }
}

module.exports = new ClientController()