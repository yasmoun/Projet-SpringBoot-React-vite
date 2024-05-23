package adminRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import Telecom.application.Telecom.entity.Admin;

public interface adminRepository extends JpaRepository<Admin, Integer>{
}
