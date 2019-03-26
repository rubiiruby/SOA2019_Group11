package com.selection.campaign.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Campaign {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String detail;
    private String expiredDate;
    private String image;
    @OneToMany(mappedBy = "campaign", cascade = CascadeType.ALL)
    private List<Candidate> candidates = new ArrayList<Candidate>();

    public Campaign() {

    }

    public Campaign(String name, String detail, String expiredDate, String image) {
        this.name = name;
        this.detail = detail;
        this.expiredDate = expiredDate;
        this.image = image;
    }

    public Campaign(String name, String detail, String expiredDate, String image, List<Candidate> candidates) {
        this.name = name;
        this.detail = detail;
        this.expiredDate = expiredDate;
        this.image = image;
        this.candidates = candidates;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
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
}
