const express = require('express')

module.exports = function(server) {
    //definir a url base para todas as rotas:
    const router = express.Router()
    server.use('/api', router)

    //Rotas referente ao ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}