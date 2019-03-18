
## **How to run**

 - **git clone**<br>`https://github.com/rubiiruby/SOA2019_Group11.git`
 - **compile** 
 `mvnw clean package`
  - **run**
`mvnw spring-boot:run`

## **API**
| Endpoint | 
|--|
| *GET*    /campaigns |
| *GET*    /campaign/:id |
| *GET*    /campaign/:id/result | 
| *POST*   /campaign/|
| *POST*   /campaigns/:id|


## **DEPLOY**

**soa-project-selection-234112.appspot.com/**

***example***
GET soa-project-selection-234112.appspot.com/campaign/112/result <br>
Response: `{"campaignId":"112","candidateScore":[{"imgURL":"prayuth.jpg","name":"mr.prayuth","detail":null,"voteAmount":67000000},{"imgURL":"prayuthSmile.jpg","name":"mr.prayuth","detail":null,"voteAmount":99999999}]}`

