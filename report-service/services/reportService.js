module.exports = {
  getCampaignReportById: (req, res) => {
    const campaignId = req.params.campaignId
    let reportResult = {
      "visitor": 12,
      "voted": 10,
      "result": [
          {
              "id": 1,
              "score": 3,
              "percent": 30.00
          },
          {
              "id": 2,
              "score": 7,
              "percent": 70.00
          }
      ]
  }
    if (campaignId == 1) {
      res.status(200).json(reportResult)
    } else {
      res.status(401).json({result: "Unauthorized"})
    }
  }
}