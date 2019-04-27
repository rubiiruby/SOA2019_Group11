const Router = require('express')
const routes = Router.Router()
const reportService = require('../services/reportService')

routes.get("/", (req, res) => {
    res.send("Report service")
})

//Route to Campaign report
routes.get("/:campaignId", reportService.getCampaignReportById)

module.exports = routes