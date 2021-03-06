const utils = require('../utils')

const Client = require('../models/Client')
const Address = require('../models/Address')
const Contact = require('../models/Contact')
const jwt = require('jsonwebtoken')

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

    async login(req, res) {
        try {
            const { email, password } = req.body
            const result = await Client.findEmail(email)
            if (result.length > 0) {
                const correctPassword = await utils.comparePasswords(password, result[0].password)
                if (correctPassword) {
                    const token = jwt.sign(
                        {
                            userId: result[0].id,
                            email: result[0].email
                        },
                        process.env.JWT_key,
                        {
                            expiresIn: '7d'
                        }
                    )

                    res.statusCode = 200
                    res.json({
                        status: true,
                        msg: 'Autenticado com sucesso',
                        token
                    })
                } else {
                    res.statusCode = 401
                    res.json({
                        status: false,
                        msg: 'Email ou senha incorretos'
                    })
                }
            } else {
                res.statusCode = 401
                res.json({
                    status: false,
                    msg: 'Email ou senha incorretos'
                })
            }
        } catch (error) {

        }
    }

}

module.exports = new ClientController()