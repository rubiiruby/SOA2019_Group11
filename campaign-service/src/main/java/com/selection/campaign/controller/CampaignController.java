package com.selection.campaign.controller;

import com.selection.campaign.model.Campaign;
import com.selection.campaign.model.CampaignResult;
import com.selection.campaign.model.VoteResult;
import com.selection.campaign.service.CampaignService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;

@RestController
public class CampaignController {

    private CampaignService campaignService = new CampaignService();

    //get all campaign
    @GetMapping("/campaigns")
    public ArrayList getCampaigns() {
        return campaignService.getAllCampaigns();
    }

    //vote
    @PostMapping("/campaign/{id}")
    public VoteResult vote(@PathVariable String id) {
        return campaignService.vote(id);
    }

    //get vote result
    @GetMapping("/campaign/{id}/result")
    public CampaignResult getCampaignResult(@PathVariable String campaignId) {
        return campaignService.getCampaignResult(campaignId);
    }

    //create campaign
    @PostMapping("/campaign")
    public HashMap<String, String> createCampaign() {
        HashMap<String, String> response = new HashMap<>();
        response.put("result", campaignService.createCampaign());
        return response;
    }

    //get campaign by id
    @GetMapping("/campaign/{campaignId}")
    public Campaign getCampaignById(@PathVariable String campaignId) {return campaignService.getCampaignById(campaignId);}
}
