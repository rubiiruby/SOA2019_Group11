package com.selection.campaign.model;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Campaign {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    @Type(type = "text")
    private String detail;
    private String expiredDate;
    @OneToMany(mappedBy = "campaign", cascade = CascadeType.ALL)
    private List<CampaignImage> image = new ArrayList<CampaignImage>();
    @OneToMany(mappedBy = "campaign", cascade = CascadeType.ALL)
    private List<Candidate> candidates = new ArrayList<Candidate>();
    @OneToMany(mappedBy = "campaign", cascade = CascadeType.ALL)
    private List<Voter> voters = new ArrayList<Voter>();

    public Campaign() {

    }

    public Campaign(String name, String detail, String expiredDate, List<CampaignImage> image, List<Candidate> candidates, List<Voter> voters) {
        this.name = name;
        this.detail = detail;
        this.expiredDate = expiredDate;
        this.image = image;
        this.candidates = candidates;
        this.voters = voters;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public String getExpiredDate() {
        return expiredDate;
    }

    public void setExpiredDate(String expiredDate) {
        this.expiredDate = expiredDate;
    }

    public List<CampaignImage> getImage() {
        return image;
    }

    public void setImage(List<CampaignImage> image) {
        this.image = image;
        this.image.forEach(x -> x.setCampaign(this));
    }

    public List<Candidate> getCandidates() {
        return candidates;
    }

    public Campaign setCandidates(List<Candidate> candidates) {
        this.candidates = candidates;
        this.candidates.forEach(x -> x.setCampaign(this));
        return this;
    }

    public Campaign addCandidate(Candidate candidate) {
        this.candidates.add(candidate.setCampaign(this));
        return this;
    }

    public List<Voter> getVoters() {
        return voters;
    }

    public void setVoters(List<Voter> voters) {
        this.voters = voters;
        this.voters.forEach(x -> x.setCampaign(this));
    }
}
