package com.selection.campaign.service;

import com.selection.campaign.NotFoundException;
import com.selection.campaign.model.Campaign;
import com.selection.campaign.data.CampaignResult;
import com.selection.campaign.data.VoteResult;
import com.selection.campaign.repository.CampaignRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class CampaignService {

    @Autowired
    private CampaignRepository campaignRepository;

    public CampaignResult getCampaignResult(Long campaignId) {
        Optional<Campaign> optional = campaignRepository.findById(campaignId);
        Campaign campaign = optional.orElseThrow(() -> new NotFoundException(campaignId));
        CampaignResult campaignResult = new CampaignResult(campaign.getId(), campaign.getCandidates());
        return campaignResult;
    }

    public VoteResult vote(Long campaignId, Long candidateId) {
        Optional<Campaign> optional = campaignRepository.findById(campaignId);

        Campaign campaign = optional.orElseThrow(() -> new NotFoundException(campaignId));
        campaign.getCandidates().forEach(candidate -> {
            if ( candidate.getId() == candidateId ) {
                candidate.addVoteAmount();
            }
        });
        campaign = campaignRepository.save(campaign);
        return new VoteResult(campaignId, 1, "xxxxx");
    }

    public Campaign createCampaign(Campaign campaign) {
        return campaignRepository.save(campaign);
    }

    public ArrayList<Campaign> getAllCampaigns() {
        return campaignRepository.findAll();
    }

    public Optional<Campaign> getCampaignById(Long campaignId) {
        return campaignRepository.findById(campaignId);
    }
}
