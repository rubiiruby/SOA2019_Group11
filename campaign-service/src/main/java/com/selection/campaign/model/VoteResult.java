package com.selection.campaign.model;

public class VoteResult {

    private String vote;
    private String result;
    private String otp;

    public VoteResult(String vote, String result, String otp) {
        this.vote = vote;
        this.result = result;
        this.otp = otp;
    }

    public String getVote() {
        return vote;
    }

    public void setVote(String vote) {
        this.vote = vote;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getOtp() {
        return otp;
    }

    public void setOtp(String otp) {
        this.otp = otp;
    }
}
