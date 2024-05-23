package Telecom.application.Telecom.interventionRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import Telecom.application.Telecom.InterventionEntity.Intervention;

public interface InterventionRepository extends JpaRepository<Intervention,Long>{

}
