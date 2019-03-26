package com.selection.campaign.data;

public class VoteResult {

    private Long vote;
    private Integer result;
    private String otp;

    public VoteResult() {
    }

    public VoteResult(Long vote, Integer result, String otp) {
        this.vote = vote;
        this.result = result;
        this.otp = otp;
    }

    public Long getVote() {
        return vote;
    }

    public void setVote(Long vote) {
        this.vote = vote;
    }

    public Integer getResult() {
        return result;
    }

    public void setResult(Integer result) {
        this.result = result;
    }

    public String getOtp() {
        return otp;
    }

    public void setOtp(String otp) {
        this.otp = otp;
    }
}
