package com.selection.campaign.repository;

import com.selection.campaign.model.Campaign;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;

@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = {CampaignRepository.class})
class CampaignRepositoryTest {
    @Autowired
    private CampaignRepository campaignRepository = mock(CampaignRepository.class);

    @BeforeEach
    public void setup() {
        campaignRepository.createCampaign();
    }

    @Test
    void getAllCampaigns() {
        //ArrayList<Campaign> campaigns = campaignRepository.getAllCampaigns();
        Campaign campaign = campaignRepository.getCampaignById("1");
        assertEquals("Thailand Election", campaign.getName());
        assertEquals("Just a Fair Election", campaign.getDetail());
        assertEquals("2017-08-19 12:17:55", campaign.getExpiredDate());
        assertEquals("CampaignImage-1", campaign.getImage());
    }
}