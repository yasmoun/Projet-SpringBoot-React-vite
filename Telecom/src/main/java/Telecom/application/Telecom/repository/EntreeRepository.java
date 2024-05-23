package Telecom.application.Telecom.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import Telecom.application.Telecom.entity.Entree;
import Telecom.application.Telecom.entity.EntreeID;

public interface EntreeRepository extends JpaRepository<Entree,EntreeID>{
	Optional<Entree> findById_EquipId(Long equipId);
}
