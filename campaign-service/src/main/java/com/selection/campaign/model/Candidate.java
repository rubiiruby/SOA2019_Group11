package com.selection.campaign.model;

public class Candidate {

    private String imgURL;
    private String name;
    private String detail;
    private int voteAmount;

    public Candidate(String imgURL, String name, int voteAmount) {
        this.imgURL = imgURL;
        this.name = name;
        this.voteAmount = voteAmount;
    }

    public Candidate(String imgURL, String name, String detail) {
        this.imgURL = imgURL;
        this.name = name;
        this.detail = detail;
        this.voteAmount = 0;
    }

    public Candidate(String imgURL, String name) {
        this.imgURL = imgURL;
        this.name = name;
        this.voteAmount = 0;
    }

    public Candidate() {

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

    public String getDetail() { return detail; }

    public void setDetail(String detail) { this.detail = detail; }

    public int getVoteAmount() {
        return voteAmount;
    }

    public void setVoteAmount(int voteAmount) {
        this.voteAmount = voteAmount;
    }
}
