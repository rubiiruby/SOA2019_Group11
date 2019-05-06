# Selection 

Web for vote

## **How to run**  (only campaign service!!)

 - **git clone**<br>
 `https://github.com/rubiiruby/SOA2019_Group11.git`
 - **compile**<br>
 `mvnw clean package`
 - **run**<br>
 `mvnw spring-boot:run`
 - **test**<br>
 `mvnw test`

## **API**
| Endpoint | 
|--|
| *GET*    /campaigns |
| *GET*    /campaign/:id |
| *GET*    /campaign/:id/result | 
| *POST*   /campaign/|
| *POST*   /campaigns/:id|


## **DEPLOY**

**https://soa-project-selection-234112.appspot.com/**

***example***
GET soa-project-selection-234112.appspot.com/campaign/112/result <br>
Response:

    {
        "campaignId": "112",
        "candidateScore": [
            {
                "imgURL": "prayuth.jpg",
                "name": "mr.prayuth",
                "detail": null,
                "voteAmount": 67000000
            },{
                "imgURL": "prayuthSmile.jpg",
                "name": "mr.prayuth",
                "detail": null,
                "voteAmount": 99999999
            }
        ]
    }

