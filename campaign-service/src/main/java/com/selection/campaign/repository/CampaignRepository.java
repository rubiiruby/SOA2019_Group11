package com.selection.campaign.repository;

import com.selection.campaign.model.Campaign;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Optional;

@Repository
public interface CampaignRepository extends CrudRepository<Campaign, Long> {
    @Override
    Optional<Campaign> findById(Long aLong);

    @Override
    ArrayList<Campaign> findAll();

    //    public VoteResult vote(String id) {
//        return new VoteResult("prayuth", "success", "12346");
//    }
//
//    public CampaignResult getCampaignResult(String campaignId) {
//        ArrayList<Candidate> mockCandidate = new ArrayList<>();
//        mockCandidate.add(new Candidate("prayuth.jpg", "mr.prayuth", 99999));
//        mockCandidate.add(new Candidate("prayuthSmile.jpg", "mr.prayuth", 123456));
//        return new CampaignResult(campaignId, mockCandidate);
//    }
//
//    public String createCampaign() {
//        String result = "success";
//        return result;
//    }
//
//    public ArrayList<Campaign> getAllCampaigns() {
//        ArrayList<Candidate> mockCandidates = new ArrayList<>();
//        mockCandidates.add(new Candidate("prayuth.jpg", "mr.prayuth"));
//        mockCandidates.add(new Candidate("prayuthSmile.jpg", "mr.prayuth"));
//        ArrayList<Campaign> campaigns = new ArrayList<>();
//        campaigns.add(new Campaign("Thailand Election", "Just a Fair Election", "2017-08-19 12:17:55", "CampaignImage-1", mockCandidates));
//        return campaigns;
//    }
//
//    public Campaign getCampaignById(String campaignId) {
//        ArrayList<Candidate> mockCandidates = new ArrayList<>();
//        mockCandidates.add(new Candidate("prayuth.jpg", "mr.prayuth"));
//        mockCandidates.add(new Candidate("prayuthSmile.jpg", "mr.prayuth"));
//        return new Campaign("Thailand Election", "Just a Fair Election", "2017-08-19 12:17:55", "CampaignImage-1", mockCandidates);
//    }
}
