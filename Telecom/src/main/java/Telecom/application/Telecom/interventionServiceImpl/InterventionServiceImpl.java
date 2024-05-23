/*package Telecom.application.Telecom.interventionServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import Telecom.application.Telecom.InterventionService.InterventionService;
import Telecom.application.Telecom.dto.EquipmentDto;
import Telecom.application.Telecom.service.EquipmentService;
import lombok.AllArgsConstructor;
@Service
@AllArgsConstructor
public class InterventionServiceImpl implements InterventionService{
	@Autowired
	private EquipmentService equipmentService;
	//build add equipment rest api
	@PostMapping
	public ResponseEntity<String> addEquipment(@RequestBody EquipmentDto request) {
	    equipmentService.addEquipment(request);
	    return ResponseEntity.status(HttpStatus.CREATED).body("Equipment added successfully");
	}
}
/*
	@Override
	public InterventionDto getInterventionById(Long interventionId) {
		Intervention intervention =interventionRepository.findById(interventionId).orElseThrow(()-> new ResourceNotFoundException("L'intervention n'existe pas : "+interventionId));
		return InterventionMapper.mapToInterventionDto(intervention);
	}

	@Override
	public List<InterventionDto> getAllInterventions() {
		List<Intervention> interventions= interventionRepository.findAll();
		return interventions.stream().map((intervention)->InterventionMapper.mapToInterventionDto(intervention)).collect(Collectors.toList());
	}

	@Override
	public InterventionDto updateIntervention(Long interventionId, InterventionDto updatedIntervention) {
		Intervention intervention= interventionRepository.findById(interventionId).orElseThrow(()->new ResourceNotFoundException("intervention n'existe pas "+interventionId));	
		intervention.setNameE(updatedIntervention.getNameE());
		intervention.setTypeE(updatedIntervention.getTypeE());
		intervention.setMarqueE(updatedIntervention.getMarqueE());
		intervention.setDomaineE(updatedIntervention.getDomaineE());
		intervention.setCentre(updatedIntervention.getCentre());
		intervention.setTypeI(updatedIntervention.getTypeI());
		intervention.setDateDI(updatedIntervention.getDateDI());
		intervention.setDateFI(updatedIntervention.getDateFI());
		intervention.setEtatE(updatedIntervention.getEtatE());
		intervention.setNameIntervenant(updatedIntervention.getNameIntervenant());
		intervention.setObservations(updatedIntervention.getObservations());
		interventionRepository.save(intervention);
		Intervention updatedInterventionObj = interventionRepository.save(intervention);
		
		return InterventionMapper.mapToInterventionDto(updatedInterventionObj);
	}

	@Override
	public void deleteIntervention(Long interventionId) {
		interventionRepository.findById(interventionId).orElseThrow(()-> new ResourceNotFoundException("L'intervention n'existe pas : "+interventionId));
		interventionRepository.deleteById(interventionId);
	}
}
*/