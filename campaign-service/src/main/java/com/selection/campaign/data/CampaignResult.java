package com.selection.campaign.data;

import com.selection.campaign.model.Candidate;

import java.util.List;

public class CampaignResult {

    private Long campaignId;
    private List<Candidate> candidateScore;

    public CampaignResult() {

    }

    public CampaignResult(Long campaignId, List<Candidate> candidateScore) {
        this.campaignId = campaignId;
        this.candidateScore = candidateScore;
    }

    public Long getCampaignId() {
        return campaignId;
    }

    public void setCampaignId(Long campaignId) {
        this.campaignId = campaignId;
    }

    public List<Candidate> getCandidateScore() {
        return candidateScore;
    }

    public void setCandidateScore(List<Candidate> candidateScore) {
        this.candidateScore = candidateScore;
    }
}
