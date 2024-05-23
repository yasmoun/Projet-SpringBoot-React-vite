package Telecom.application.Telecom.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Telecom.application.Telecom.dto.EquipmentDto;
import Telecom.application.Telecom.service.EquipmentService;
import lombok.AllArgsConstructor;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/equipment")
public class EquipmentController {
@Autowired
private EquipmentService equipmentService;
//build add equipment rest api
@PostMapping
public ResponseEntity<String> addEquipment(@RequestBody EquipmentDto request) {
    equipmentService.addEquipment(request);
    return ResponseEntity.status(HttpStatus.CREATED).body("Equipment added successfully");
}

@GetMapping("/{id}")
public EquipmentDto getEquipmentById(@PathVariable Long id) {
    return equipmentService.getEquipmentById(id);
}
@GetMapping
public ResponseEntity<List<EquipmentDto>> getAllEquipments() {
    List<EquipmentDto> equipments = equipmentService.getAllEquipments();
    return ResponseEntity.status(HttpStatus.OK).body(equipments);
}

@PutMapping("/{id}")
public ResponseEntity<String> updateEquipment(@PathVariable("id") Long id, @RequestBody EquipmentDto request) {
    try {
        equipmentService.updateEquipment(id, request);
        return ResponseEntity.status(HttpStatus.OK).body("Equipment updated successfully");
    } catch (IllegalArgumentException ex) {
        return ResponseEntity.notFound().build();
    }
}
}
//build Get equipment rest api
/*@GetMapping("{id}")
public ResponseEntity<EquipmentDto> getEquipmentById(@PathVariable("id") Long equipmentId){
	EquipmentDto equipmentDto = equipmentService.getEquipmentById(equipmentId);
	return ResponseEntity.ok(equipmentDto);
}
//build Get All equipments rest api
@GetMapping
public ResponseEntity<List<EquipmentDto>> getAllEquipments(){
	List<EquipmentDto> equipments= equipmentService.getAllEquipments();
	return ResponseEntity.ok(equipments);
}
//build update All equipments rest api
@PutMapping("{id}")
public ResponseEntity<EquipmentDto> updateEquipment(@PathVariable("id") Long equipmentId,@RequestBody EquipmentDto updatedEquipment){
EquipmentDto equipmentDto= equipmentService.updateEquipment(equipmentId, updatedEquipment);
	return ResponseEntity.ok(equipmentDto);
}
//build delete equipment rest api
@DeleteMapping("{id}")
public ResponseEntity<String> deleteEquipment(@PathVariable("id") Long equipmentId){
	equipmentService.deleteEquipment(equipmentId);
	return ResponseEntity.ok("équipement supprimé avec succés!");
}

}*/
