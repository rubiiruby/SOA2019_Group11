[![CircleCI](https://circleci.com/gh/rubiiruby/SOA2019_Group11.svg?style=svg)](https://circleci.com/gh/rubiiruby/SOA2019_Group11)
# Selection 

Web for vote

## **How to run**  (only campaign service!!)

 - **git clone**<br>
 `git clone https://github.com/rubiiruby/SOA2019_Group11.git`
 - **run**<br>
 `docker-compose up -d`

## **API Endpoint (Port: 3001)**
| Method | Endpoint |
|--|--|
| *POST*  | /user/signup |
| *POST*  | /user/signin |

## **Campaign Endpoint (Port: 3002)**
| Method | Endpoint |
|--|--|
| *GET*   | /campaign |
| *POST*  | /campaign |
| *PUT*   | /campaign/:campaignId |
| *PUT*   | /campaign/:campaignId/candidate/:candidateId |
| *POST*  | /campaign/:campaignId/vote |
| *GET*   | /campaign/:campaignId/result | 
| *GET*   | /campaigns/history/vote |
| *GET*   | /campaigns/history/create |

## **Report Endpoint (Port: 3003)**
| Method | Endpoint |
|--|--|
| *GET*   | /report/:campaignId |
| *POST*  | /report/:campaignId/:candidateId |
| *POST*  | /report/:campaignId |

## **DEPLOY**

**http://35.247.147.70/**

***example***
GET http://35.247.147.70:3002/campaign/4/result <br>
Response:

    {
        "id": 4,
        "name": "Student council",
        "detail": "test campaign",
        "expiredDate": "01-01-2019 14:00",
        "userId": "xYCtrHhWhUefSPMtX9bPzY8VQ893",
        "createdAt": "2019-05-07T06:54:48.000Z",
        "updatedAt": "2019-05-07T06:54:48.000Z",
        "Candidates": [
            {
                "id": 8,
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/soa-project-selection-234112/o/b55291b8-6c5b-419b-9661-ff9fe30efeb9.jpeg?alt=media",
                "title": "choice a",
                "detail": "",
                "voteAmount": 0,
                "createdAt": "2019-05-07T06:54:48.000Z",
                "updatedAt": "2019-05-07T06:54:49.000Z",
                "campaignId": 4
            },
            {
                "id": 9,
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/soa-project-selection-234112/o/6f22dde8-5bb8-4f69-ae75-5315f0363eab.jpeg?alt=media",
                "title": "choice b",
                "detail": "",
                "voteAmount": 1,
                "createdAt": "2019-05-07T06:54:48.000Z",
                "updatedAt": "2019-05-07T06:55:10.000Z",
                "campaignId": 4
            }
        ]
    }

