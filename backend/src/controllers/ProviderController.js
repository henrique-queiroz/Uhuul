const utils = require('../utils')

const Provider = require('../models/Provider')
const Address = require('../models/Address')
const Contact = require('../models/Contact')
const jwt = require('jsonwebtoken')

class ProviderController {

    async create(req, res) {

        const data = { ...req.body }

        const userExists = await Provider.userExists(data.provider.cnpj)

        if (!userExists) {

            const address = await Address.create(data.address)
            console.log(address);
            const contact = await Contact.create(data.contact)
            console.log(contact);

            const providerInsertData = {
                ...data.provider,
                contact_id: contact.lastId[0],
                password: utils.hashPassword(data.provider.password)
            }

            console.log(providerInsertData)

            const providerInsertResult = await Provider.create(providerInsertData)

            if (providerInsertResult.status) {

                res.statusCode = 201
                res.json(providerInsertResult);

            } else {

                res.statusCode = 400
                res.json(providerInsertResult)

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
            const result = await Provider.getAll();

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
            const result = await Provider.delete(id)

            if (result.status) {
                res.statusCode = 200
                res.json({
                    status: true,
                    msg: 'Fornecedor excluído com sucesso'
                })
            } else {
                res.statusCode = 400
                res.json({
                    status: false,
                    msg: 'Não foi possível exluir fornecedor'
                })
            }
        } catch (error) {

        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body
            const result = await Provider.findEmail(email)
            if (result.length > 0) {
                const correctPassword = await utils.comparePasswords(password, result[0].password)
                if (correctPassword) {
                    const token = jwt.sign(
                        {
                            userId: result[0].id,
                            nome: result[0].nome
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
                    msg: 'Usuário ou senha incorretos'
                })
            }
        } catch (error) {

        }
    }

}

module.exports = new ProviderController()