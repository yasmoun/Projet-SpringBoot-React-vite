package Telecom.application.Telecom.interventionRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import Telecom.application.Telecom.InterventionEntity.Intervenant;

public interface IntervenantRepository extends JpaRepository<Intervenant,Long>{
	Intervenant findByCinIntervenant(Long id);
}
