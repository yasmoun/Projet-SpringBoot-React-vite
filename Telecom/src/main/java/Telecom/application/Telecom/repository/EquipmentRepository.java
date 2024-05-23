package Telecom.application.Telecom.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import Telecom.application.Telecom.entity.Equipment;

public interface EquipmentRepository extends JpaRepository<Equipment, Long>{
}
