package com.selection.campaign.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.selection.campaign.data.CampaignResult;
import com.selection.campaign.data.VoteResult;
import com.selection.campaign.model.Campaign;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@RunWith(SpringRunner.class)
class CampaignControllerTest {

    @Autowired
    private TestRestTemplate restTemplate = new TestRestTemplate();

    @Test
    void createCampaign() {
        ResponseEntity<Campaign> campaign  = restTemplate.getForEntity("/campaign", Campaign.class);
    }

    @Test
    void getCampaigns() {
        ResponseEntity<ArrayList> response = restTemplate.getForEntity("/campaigns", ArrayList.class);
        assertNotNull(response);
    }

    @Test
    void vote() {
        VoteResult response = restTemplate.postForObject("/campaign/1", null, VoteResult.class);
        assertEquals("prayuth", response.getVote());
    }

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

    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}