package com.selection.campaign.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Candidate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String imgURL;
    private String name;
    private String detail;
    private int voteAmount;

    @JsonIgnore
    @ManyToOne
    @JoinColumn
    private Campaign campaign;

    public Candidate() {

    }

    public Candidate(String name, String detail, String imgURL, Campaign campaign) {
        this.imgURL = imgURL;
        this.name = name;
        this.detail = detail;
        this.campaign = campaign;
    }

    public Candidate(String name, String detail, String imgURL) {
        this.imgURL = imgURL;
        this.name = name;
        this.detail = detail;
        this.voteAmount = 0;
    }

    public long getId() {
        return id;
    }

    public Candidate setId(long id) {
        this.id = id;
        return this;
    }

    public String getImgURL() {
        return imgURL;
    }

    public Candidate setImgURL(String imgURL) {
        this.imgURL = imgURL;
        return this;
    }

    public String getName() {
        return name;
    }

    public Candidate setName(String name) {
        this.name = name;
        return this;
    }

    public String getDetail() {
        return detail;
    }

    public Candidate setDetail(String detail) {
        this.detail = detail;
        return this;
    }

    public int getVoteAmount() {
        return voteAmount;
    }

    public Candidate setVoteAmount(int voteAmount) {
        this.voteAmount = voteAmount;
        return this;
    }

    public Campaign getCampaign() {
        return campaign;
    }

    public Candidate setCampaign(Campaign campaign) {
        this.campaign = campaign;
        return this;
    }

    public Candidate addVoteAmount() {
        this.voteAmount += 1;
        return this;
    }
}
