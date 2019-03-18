package com.selection.campaign.service;

import com.selection.campaign.model.Campaign;
import com.selection.campaign.model.CampaignResult;
import com.selection.campaign.model.VoteResult;
import com.selection.campaign.repository.CampaignRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CampaignService {

    CampaignRepository campaignRepository  = new CampaignRepository();

    public CampaignResult getCampaignResult(String campaignId) {
        return campaignRepository.getCampaignResult(campaignId);
    }

    public VoteResult vote(String id) {
        return campaignRepository.vote(id);
    }

    public String createCampaign() {
        return campaignRepository.createCampaign();
    }

    public ArrayList<Campaign> getAllCampaigns() {
        return campaignRepository.getAllCampaigns();
    }
}
