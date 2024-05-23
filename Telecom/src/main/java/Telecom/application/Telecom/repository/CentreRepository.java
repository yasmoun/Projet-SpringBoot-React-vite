package Telecom.application.Telecom.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import Telecom.application.Telecom.entity.Centre;

public interface CentreRepository extends JpaRepository<Centre, Long>{
	Centre findByNameCentre(String name);
}
