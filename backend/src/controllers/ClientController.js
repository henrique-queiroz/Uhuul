class ClientController {
    
    async get(req, res) {

        try {
            
            const data = {}
            res.statusCode = 200;
            res.json({ status:true, msg: 'Sucesso', data })

        } catch (error) {

            res.statusCode = 406;
            res.json({
                status: false,
                msg: 'Algum erro aconteceu'
            })

        }
    }
}

module.exports = new ClientController()