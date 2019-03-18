package com.selection.campaign.repository;

import com.selection.campaign.model.Campaign;
import com.selection.campaign.model.CampaignResult;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;

class CampaignRepositoryTest {
    @Autowired
    private CampaignRepository campaignRepository = mock(CampaignRepository.class);

    @Before
    public void setup() {
        campaignRepository.createCampaign();
    }

    @Test
    void getAllCampaigns() {
        ArrayList<Campaign> campaigns = campaignRepository.getAllCampaigns();
        Campaign campaign = campaignRepository.getCampaignById("1");
        assertEquals("Thailand Election", campaign.getName());
        assertEquals("Just a Fair Election", campaign.getDetail());
        assertEquals("2017-08-19 12:17:55", campaign.getExpiredDate());
        assertEquals("CampaignImage-1", campaign.getImage());
    }
}