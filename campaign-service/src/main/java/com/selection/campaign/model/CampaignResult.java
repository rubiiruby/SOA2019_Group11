package com.selection.campaign.model;

import java.util.ArrayList;

public class CampaignResult {

    private String campaignId;
    private ArrayList<Candidate> candidateScore;

    public CampaignResult(String campaignId, ArrayList candidateScore) {
        this.campaignId = campaignId;
        this.candidateScore = candidateScore;
    }

    public String getCampaignId() {
        return campaignId;
    }

    public void setCampaignId(String campaignId) {
        this.campaignId = campaignId;
    }

    public ArrayList getCandidateScore() {
        return candidateScore;
    }

    public void setCandidateScore(ArrayList candidateScore) {
        this.candidateScore = candidateScore;
    }
}
