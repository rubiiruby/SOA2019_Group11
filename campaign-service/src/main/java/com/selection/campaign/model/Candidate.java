package com.selection.campaign.model;

public class Candidate {

    private String imgURL;
    private String name;
    private int voteAmount;

    public Candidate(String imgURL, String name, int voteAmount) {
        this.imgURL = imgURL;
        this.name = name;
        this.voteAmount = voteAmount;
    }

    public String getImgURL() {
        return imgURL;
    }

    public void setImgURL(String imgURL) {
        this.imgURL = imgURL;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getVoteAmount() {
        return voteAmount;
    }

    public void setVoteAmount(int voteAmount) {
        this.voteAmount = voteAmount;
    }
}
