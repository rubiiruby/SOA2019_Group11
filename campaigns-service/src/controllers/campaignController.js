import Router from 'express'
import jwtService from '../services/jwtService'
import models from '../models'
import { check, validationResult } from 'express-validator/check'
import Multer from 'multer'
import admin from 'firebase-admin'
import uuidv4 from 'uuid/v4'

const serviceAccount = require("../../credentials/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "soa-project-selection-234112"
})

const bucket = admin.storage().bucket()

const routes = Router.Router()

const multer = Multer({
  storage: Multer.diskStorage('/tmp'),
  limits: {
    fileSize: 20 * 1024 * 1024 // no larger than 5mb, you can change as needed.
  }
})

// routes.get("/", (req, res) => {
//   res.send("Campaign service")
// })

// Route to get all campaign
routes.get("/", async (req, res) => {
  const campaign = await models.Campaign.findAll()
  res.json(campaign.dataValues)
})

// Route to get campaign
routes.get("/:campaignId", async (req, res) => {
  const campaign = await models.Campaign.findOne({ where: { id: req.params.campaignId }, include: [models.Candidate, models.CampaignImage]})
  res.json(campaign.dataValues)
})

// Route to post create campaign
routes.post("/", [
  check('name', 'Invalid name').exists(),
  check('detail', 'Invalid detail').exists(),
  check('image', 'Invalid image').exists(),
  check('expiredDate', 'Invalid expiredDate').exists(),
  check('candidates', 'Invalid candidates').exists(),
], async (req, res) => {
  let count = 1
  const campaign = await models.Campaign.create(req.body)
  await req.body.candidates.forEach(async candidate => {
    candidate.campaignId = campaign.dataValues.id
    await models.Candidate.create(candidate)
    count++
    if ( req.body.candidates.length == count ) {
      const updateCampaign = await models.Campaign.findOne({ where: { id: campaign.dataValues.id }, include: [models.Candidate] })
      res.json(updateCampaign.dataValues)
    }
  })
})

// Route to update image campaign
routes.put("/:campaignId", multer.array('images'), (req, res) => {
  let count = 0
  req.files.forEach(file => {
    bucket.upload(file.path, {
      contentType: file.mimetype,
      public: true
    }).then(uploaded => {
      const name = `${uuidv4()}.jpeg`
      uploaded[0].move(name)
      models.CampaignImage.create({
        imageURL: `https://firebasestorage.googleapis.com/v0/b/soa-project-selection-234112/o/${name}?alt=media`,
        campaignId: req.params.campaignId
      })
      count++
      if ( count == req.files.length ) {
        res.json({
          upload: "done"
        })
      }
    }).catch(err => {
      console.log(err)
      res.status(500).json({
        message: "som thing error"
      })
    })
  })
})

// Route to update image candidate
routes.put("/:campaignId/candidate/:candidateId", multer.single('image'), (req, res) => {
  bucket.upload(req.file.path, {
    contentType: req.file.mimetype,
    public: true
  }).then(uploaded => {
    const name = `${uuidv4()}.jpeg`
    uploaded[0].move(name)
    models.Candidate.update({
      imageURL: `https://firebasestorage.googleapis.com/v0/b/soa-project-selection-234112/o/${name}?alt=media`,
    }, { where: { id: req.params.candidateId }})
    res.json({
      upload: "done"
    })
  }).catch(err => {
    console.log(err)
    res.status(500).json({
      message: "som thing error"
    })
  })
})

// Route to vote campaign
routes.post("/:campaignId/vote", async (req, res) => {
  const voter = await models.Voter.create({
    userId: 1,
    campaignId: req.params.campaignId
  })
  res.json(voter)
})

// Route to get campaign result
routes.get("/:campaignId/result", async (req, res) => {
  const campaign = await models.Campaign.findOne({ where: { id: req.params.campaignId }})
  const timeNow = new Date()
  // timeNow.
  // if ( campaign.dataValues.expiredDate ) {

  // }
})

// Route to get history vote
routes.get("/history/vote", async (req, res) => {
  const voted = await models.Voter.findAll({ where: { userId: 1 } })
  res.json(voted)
})

// Route to get hisotry create
routes.get("/history/create", async (req, res) => {
  const voted = await models.Campaign.findAll({ where: { userId: 1 } })
  res.json(voted)
})

routes.get("/test/sync", async (req, res) => {
  await models.User.sync()
  await models.Campaign.sync()
  await models.CampaignImage.sync()
  await models.Candidate.sync()
  await models.Voter.sync()
  res.send("ok")
})

export default routes