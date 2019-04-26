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
}
