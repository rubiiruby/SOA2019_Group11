package com.selection.campaign.controller;

import com.selection.campaign.model.Campaign;
import com.selection.campaign.model.CampaignResult;
import com.selection.campaign.model.VoteResult;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import java.util.ArrayList;
import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@RunWith(SpringRunner.class)
class CampaignControllerTest {

    @Autowired
    private TestRestTemplate restTemplate = new TestRestTemplate();

    @Test
    void getCampaignResult() {
        CampaignResult campaignResult = restTemplate.getForObject("/campaign/1/result", CampaignResult.class);
        assertEquals(99999, campaignResult.getCandidateScore().get(0).getVoteAmount());
        assertEquals("1", campaignResult.getCampaignId());
    }

    @Test
    void getCampaignById() {
        Campaign campaign = restTemplate.getForObject("/campaign/1", Campaign.class);
        assertEquals("Thailand Election", campaign.getName());
    }

    @Test
    void getCampaigns() {
        ResponseEntity<ArrayList> response = restTemplate.getForEntity("/campaigns", ArrayList.class);
        assertNotNull(response);
    }

    @Test
    void postCampaign() {
        ResponseEntity<HashMap> response = restTemplate.postForEntity("/campaign", null, HashMap.class);
        assertEquals("success", response.getBody().get("result"));
    }


    @Test
    void vote() {
        VoteResult response = restTemplate.postForObject("/campaign/1", null, VoteResult.class);
        assertEquals("prayuth", response.getVote());
    }

//    @Test
//    void getAllCampaign() {
//        Campaign campaigns = restTemplate.getForObject("/campaigns", Campaign.class);
//        assertEquals("mr.prayuth", campaigns.getName());
//    }

}