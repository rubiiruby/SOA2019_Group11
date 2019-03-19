package com.selection.campaign.model;

import java.util.ArrayList;

public class CampaignResult {

    private String campaignId;
    private ArrayList<Candidate> candidateScore;

    public CampaignResult(String campaignId, ArrayList<Candidate> candidateScore) {
        this.campaignId = campaignId;
        this.candidateScore = candidateScore;
    }

    public String getCampaignId() {
        return campaignId;
    }

    public void setCampaignId(String campaignId) {
        this.campaignId = campaignId;
    }

    public ArrayList<Candidate> getCandidateScore() {
        return candidateScore;
    }

    public void setCandidateScore(ArrayList<Candidate> candidateScore) {
        this.candidateScore = candidateScore;
    }
}
