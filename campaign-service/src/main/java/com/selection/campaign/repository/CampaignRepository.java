package com.selection.campaign.repository;

import com.selection.campaign.model.Campaign;
import com.selection.campaign.model.CampaignResult;
import com.selection.campaign.model.Candidate;
import com.selection.campaign.model.VoteResult;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public class CampaignRepository {

    public VoteResult vote(String id) {
        return new VoteResult(": prayuth", "success", "12346");
    }

    public CampaignResult getCampaignResult(String campaignId) {
        ArrayList<Candidate> mockCandidate = new ArrayList<>();
        mockCandidate.add(new Candidate("prayuth.jpg", "mr.prayuth", 67000000));
        mockCandidate.add(new Candidate("prayuthSmile.jpg", "mr.prayuth", 99999999));
        return new CampaignResult(campaignId, mockCandidate);
    }

    public String createCampaign() {
        String result = "success";
        return result;
    }

    public ArrayList<Campaign> getAllCampaigns() {
        ArrayList<Candidate> mockCandidate = new ArrayList<>();
        mockCandidate.add(new Candidate("prayuth.jpg", "mr.prayuth", 67000000));
        mockCandidate.add(new Candidate("prayuthSmile.jpg", "mr.prayuth", 99999999));
        ArrayList<Campaign> campaigns = new ArrayList<>();
        campaigns.add(new Campaign("thailand elect", "just thailand election", "24/3/2019", "image", mockCandidate));
        return campaigns;
    }
}
