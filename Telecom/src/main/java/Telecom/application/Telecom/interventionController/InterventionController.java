package Telecom.application.Telecom.interventionController;

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

import Telecom.application.Telecom.InterventionDto.InterventionDto;
import Telecom.application.Telecom.InterventionService.InterventionService;
import lombok.AllArgsConstructor;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/intervention")
public class InterventionController {
    @Autowired
    private InterventionService interventionService;

    @PostMapping
    public ResponseEntity<String> addIntervention(@RequestBody InterventionDto request) {
        try {
            // Appel de la méthode addIntervention du service
            interventionService.addIntervention(request);
            return ResponseEntity.status(HttpStatus.CREATED).body("Intervention ajoutée avec succès");
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Échec de l'ajout de l'intervention");
        }
    }
    
    @GetMapping
    public ResponseEntity<List<InterventionDto>> getAllInterventions() {
        List<InterventionDto> interventions = interventionService.getAllInterventions();
        return ResponseEntity.status(HttpStatus.OK).body(interventions);
    }
    @GetMapping("/{id}")
    public InterventionDto getInterventionById(@PathVariable Long id) {
        return interventionService.getInterventionById(id);
    }
 
    @PutMapping("/{id}")
    public ResponseEntity<String> updateIntervention(@PathVariable("id") Long id, @RequestBody InterventionDto request) {
        try {
            // Assurez-vous que l'ID de l'intervention dans le chemin d'accès correspond à celui dans la requête
            if (!id.equals(request.getIdI())) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("L'ID de l'intervention dans le chemin d'accès ne correspond pas à celui dans la requête");
            }
            
            // Appel de la méthode updateIntervention du service
            interventionService.updateIntervention(id ,request);
            return ResponseEntity.status(HttpStatus.OK).body("Intervention mise à jour avec succès");
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Échec de la mise à jour de l'intervention");
        }
    }
	    
/*
	//build Get equipment rest api
	@GetMapping("{idI}")
	public ResponseEntity<InterventionDto> getInterventionById(@PathVariable("idI") Long interventionId){
		InterventionDto interventionDto = interventionService.getInterventionById(interventionId);
		return ResponseEntity.ok(interventionDto);
	}
	//build Get All equipments rest api
	@GetMapping
	public ResponseEntity<List<InterventionDto>> getAllInterventions(){
		List<InterventionDto> interventions= interventionService.getAllInterventions();
		return ResponseEntity.ok(interventions);
	}
	//build update All equipments rest api
	@PutMapping("{idI}")
	public ResponseEntity<InterventionDto> updateIntervention(@PathVariable("idI") Long interventionId,@RequestBody InterventionDto updatedIntervention){
	InterventionDto interventionDto=interventionService.updateIntervention(interventionId, updatedIntervention);
		return ResponseEntity.ok(interventionDto);
	}
	//build delete equipment rest api
	@DeleteMapping("{idI}")
	public ResponseEntity<String> deleteIntervention(@PathVariable("idI") Long interventionId){
		interventionService.deleteIntervention(interventionId);
		return ResponseEntity.ok("intervention supprimé avec succés!");
	}

*/
}
