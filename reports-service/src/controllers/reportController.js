import Router from 'express'
import jwtService from '../services/jwtService'
import models from '../models'
import { check, validationResult } from 'express-validator/check'
import jwt from 'express-jwt'

const routes = Router.Router()

// Route to get all campaign
routes.get("/", async (req, res) => {
  res.send("welcom to report service")
})

// Route to get campaign
routes.get("/:campaignId", async (req, res) => {
  const campaignReport = await models.CampaignReport.findOne({ where: { id: req.params.campaignId }, include: [models.CandidateReport]})
  if ( campaignReport !== null ) {
    campaignReport.dataValues.CandidateReports.forEach(candidate => {
      candidate.dataValues.percent = candidate.dataValues.score / campaignReport.dataValues.voted * 100
    })
    res.json(campaignReport.dataValues)
  }
  res.json({})
})

routes.post("/:campaignId", async (req, res) => {
  const campaignReport = await models.CampaignReport.findOrCreate({where: {id: req.params.campaignId}, 
    defaults: {
      id: req.params.campaignId,
      visitor: 0,
      voted: 0
    }})
  const updateCampaignReport = await models.CampaignReport.update({ visitor: campaignReport[0].dataValues.visitor + 1 },{where: {id: req.params.campaignId}})
  res.json(updateCampaignReport)
})

routes.post("/:campaignId/:candidateId", async (req, res) => {
  const campaignReport = await models.CampaignReport.findOne({where: {id: req.params.campaignId}})
  const updateCampaignReport = await models.CampaignReport.update({ voted: campaignReport.dataValues.voted + 1 },{where: {id: req.params.campaignId}})
  const candidateReport = await models.CandidateReport.findOrCreate({where: {id: req.params.candidateId}, 
    defaults: {
      id: req.params.candidateId,
      score: 0,
      campaignReportId: req.params.campaignId
    }})
  const updateCandidateReport = await models.CandidateReport.update({ score: candidateReport[0].dataValues.score + 1 },{where: {id: req.params.candidateId}})
  res.json(updateCandidateReport)
})

export default routes
