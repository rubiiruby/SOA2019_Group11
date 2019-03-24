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
        return new VoteResult("prayuth", "success", "12346");
    }

    public CampaignResult getCampaignResult(String campaignId) {
        ArrayList<Candidate> mockCandidate = new ArrayList<>();
        mockCandidate.add(new Candidate("prayuth.jpg", "mr.prayuth", 99999));
        mockCandidate.add(new Candidate("prayuthSmile.jpg", "mr.prayuth", 123456));
        return new CampaignResult(campaignId, mockCandidate);
    }

    public String createCampaign() {
        String result = "success";
        return result;
    }

    public ArrayList<Campaign> getAllCampaigns() {
        ArrayList<Candidate> mockCandidates = new ArrayList<>();
        mockCandidates.add(new Candidate("prayuth.jpg", "mr.prayuth"));
        mockCandidates.add(new Candidate("prayuthSmile.jpg", "mr.prayuth"));
        ArrayList<Campaign> campaigns = new ArrayList<>();
        campaigns.add(new Campaign("Thailand Election", "Just a Fair Election", "2017-08-19 12:17:55", "CampaignImage-1", mockCandidates));
        return campaigns;
    }

    public Campaign getCampaignById(String campaignId) {
        ArrayList<Candidate> mockCandidates = new ArrayList<>();
        mockCandidates.add(new Candidate("prayuth.jpg", "mr.prayuth"));
        mockCandidates.add(new Candidate("prayuthSmile.jpg", "mr.prayuth"));
        return new Campaign("Thailand Election", "Just a Fair Election", "2017-08-19 12:17:55", "CampaignImage-1", mockCandidates);
    }
}
