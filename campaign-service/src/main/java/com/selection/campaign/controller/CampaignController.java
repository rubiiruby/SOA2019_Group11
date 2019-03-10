package com.selection.campaign.controller;

import com.selection.campaign.model.VoteResult;
import org.springframework.web.bind.annotation.*;

@RestController
public class CampaignController {

    @PostMapping("/campaign/{id}")
    public VoteResult voteResult(@PathVariable String id) {
        return new VoteResult("prayuth", "success", "12346");
    }

}
