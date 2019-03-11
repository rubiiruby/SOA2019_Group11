package com.selection.campaign.controller;

import com.selection.campaign.model.CampaignResult;
import com.selection.campaign.model.Candidate;
import com.selection.campaign.model.VoteResult;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class CampaignController {

    //vote
    @PostMapping("/campaign/{id}")
    public VoteResult vote(@PathVariable String id) {
        return new VoteResult(id + ": prayuth", "success", "12346");
    }

    //get vote result
    @GetMapping("/campaign/{id}")
    public CampaignResult getCampaignResult(@PathVariable String id) {
        ArrayList mockCandidate = new ArrayList();
        mockCandidate.add(new Candidate("prayuth.jpg", "mr.prayuth", 67000000));
        mockCandidate.add(new Candidate("prayuthSmile.jpg", "mr.prayuth", 99999999));
        return new CampaignResult("1", mockCandidate);
    }
}
