package com.selection.campaign.repository;

import com.selection.campaign.model.Candidate;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CandidateRepository extends CrudRepository <Candidate, Long> {
}
