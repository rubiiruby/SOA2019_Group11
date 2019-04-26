package com.selection.campaign.controlller;

import com.selection.campaign.data.CampaignResult;
import com.selection.campaign.data.VoteRequest;
import com.selection.campaign.data.VoteResult;
import com.selection.campaign.model.Campaign;
import com.selection.campaign.repository.CampaignRepository;
import com.selection.campaign.service.CampaignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
public class CampaignController {

    @Autowired
    private CampaignService campaignService;

    @Autowired
    private CampaignRepository campaignRepository;

    /**
     *
     * @return all campaign
     * @comment complete
     */
    @GetMapping("/campaigns")
    public ArrayList getCampaigns() {
        return campaignRepository.findAll();
    }

    /**
     *
     * @param campaignId
     * @param payload
     * @return
     * @comment complete
     */
    @PostMapping("/campaign/{campaignId}/vote")
    public VoteResult vote(@PathVariable("campaignId") Long campaignId, @RequestBody VoteRequest payload) {
        return campaignService.vote(campaignId, payload.getCandidate());
    }

    /**
     *
     * @param campaignId
     * @return result of campaign
     * @comment complete
     */
    @GetMapping("/campaign/{campaignId}/result")
    public CampaignResult getCampaignResult(@PathVariable Long campaignId) {
        return campaignService.getCampaignResult(campaignId);
    }

    /**
     *
     * @param campaign
     * @return
     * @comment complete
     */
    @PostMapping("/campaign")
    public Campaign createCampaign(@RequestBody Campaign campaign) {
        return campaignService.createCampaign(campaign);
    }

    /**
     *
     * @param campaignId
     * @return
     * @comment complete
     */
    @GetMapping("/campaign/{campaignId}")
    public Optional<Campaign> getCampaignById(@PathVariable Long campaignId) {
        return campaignService.getCampaignById(campaignId);
    }
}
