package com.selection.campaign.data;

public class VoteRequest {
    private Long candidate;

    public VoteRequest() {
    }

    public VoteRequest(Long candidate) {
        this.candidate = candidate;
    }

    public Long getCandidate() {
        return candidate;
    }

    public void setCandidate(Long candidate) {
        this.candidate = candidate;
    }
}
