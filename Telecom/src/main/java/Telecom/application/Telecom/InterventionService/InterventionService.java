package Telecom.application.Telecom.InterventionService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Telecom.application.Telecom.InterventionDto.InterventionDto;
import Telecom.application.Telecom.InterventionEntity.Intervenant;
import Telecom.application.Telecom.InterventionEntity.Intervention;
import Telecom.application.Telecom.entity.Equipment;
import Telecom.application.Telecom.interventionRepository.IntervenantRepository;
import Telecom.application.Telecom.interventionRepository.InterventionRepository;
import Telecom.application.Telecom.repository.EquipmentRepository;

@Service
public class InterventionService {
    private final InterventionRepository interventionRepository;
    private final IntervenantRepository intervenantRepository;
    private final EquipmentRepository equipmentRepository;

    public InterventionService(InterventionRepository interventionRepository, 
                               IntervenantRepository intervenantRepository,
                               EquipmentRepository equipmentRepository) {
        this.interventionRepository = interventionRepository;
        this.intervenantRepository = intervenantRepository;
        this.equipmentRepository = equipmentRepository;
    }

    @Transactional
    public void addIntervention(InterventionDto request) {
        // Recherche de l'intervenant par son ID
        Long intervenantId = request.getCinIntervenant();
        Intervenant intervenant = intervenantRepository.findById(intervenantId).orElse(null);

        // Si l'intervenant n'existe pas, on le crée
        if (intervenant == null) {
            intervenant = new Intervenant();
            intervenant.setCinIntervenant(intervenantId);
            intervenant.setNameIntervenant(request.getNameIntervenant());
            intervenant = intervenantRepository.save(intervenant);
        }

        // Vérifier si l'équipement avec l'ID spécifié existe
        Long equipmentId = request.getIdEquip();
        Equipment equipment = equipmentRepository.findById(equipmentId).orElse(null);

        // Si l'équipement existe, créer l'intervention et l'associer à l'équipement
        if (equipment != null) {
            Intervention intervention = new Intervention();
            intervention.setEquipment(equipment); // Assigner l'équipement à l'intervention
            intervention.setTypeI(request.getTypeI()); // Type d'intervention
            intervention.setDateDI(request.getDateDI()); // Date de début d'intervention
            intervention.setDateFI(request.getDateFI()); // Date de fin d'intervention
            intervention.setEtatE(request.getEtatE()); // État de l'équipement
            intervention.setObservations(request.getObservations()); // Observations de l'intervention
            intervention.setIntervenant(intervenant); // Assigner l'intervenant à l'intervention

            intervention = interventionRepository.save(intervention);

            request.setIdI(intervention.getIdI());
        } else {
            // L'équipement avec l'ID spécifié n'existe pas, ne pas créer l'intervention
            System.out.println("L'équipement avec l'ID " + equipmentId + " n'existe pas.");
            // Vous pouvez choisir de gérer cette situation d'une manière appropriée, par exemple, en lançant une exception
        }
    }

    public List<InterventionDto> getAllInterventions() {
        List<Intervention> interventions = interventionRepository.findAll();
        return mapInterventionListToDtoList(interventions);
    }

    private List<InterventionDto> mapInterventionListToDtoList(List<Intervention> interventions) {
        return interventions.stream()
                .map(this::mapInterventionToDto)
                .collect(Collectors.toList());
    }

    private InterventionDto mapInterventionToDto(Intervention intervention) {
        InterventionDto interventionDto = new InterventionDto();
        interventionDto.setIdI(intervention.getIdI());
        interventionDto.setIdEquip(intervention.getEquipment().getId());
        interventionDto.setNameE(intervention.getEquipment().getName());
        interventionDto.setTypeE(intervention.getEquipment().getType());
        interventionDto.setMarqueE(intervention.getEquipment().getMarque());
        interventionDto.setDomaineE(intervention.getEquipment().getDomaine());
        interventionDto.setCentre(intervention.getEquipment().getCentre().getNameCentre());
        interventionDto.setTypeI(intervention.getTypeI());
        interventionDto.setDateDI(intervention.getDateDI());
        interventionDto.setDateFI(intervention.getDateFI());
        interventionDto.setEtatE(intervention.getEtatE());
        interventionDto.setCinIntervenant(intervention.getIntervenant().getCinIntervenant());
        interventionDto.setNameIntervenant(intervention.getIntervenant().getNameIntervenant());
        interventionDto.setObservations(intervention.getObservations());
        return interventionDto;
    }
    @Transactional
    public void updateIntervention(Long idi, InterventionDto request) {
        // Recherche de l'intervention par son ID
        Intervention intervention = interventionRepository.findById(idi)
            .orElseThrow(() -> new RuntimeException("Intervention non trouvée avec l'ID: " + idi));

        // Recherche de l'intervenant par son ID
        Long intervenantId = request.getCinIntervenant();
        Intervenant intervenant = intervenantRepository.findById(intervenantId)
            .orElseThrow(() -> new RuntimeException("Intervenant non trouvé avec l'ID: " + intervenantId));

        // Vérification si l'équipement avec l'ID spécifié existe
        Long equipmentId = request.getIdEquip();
        Equipment equipment = equipmentRepository.findById(equipmentId)
            .orElseThrow(() -> new RuntimeException("Équipement non trouvé avec l'ID: " + equipmentId));

        // Mettre à jour les champs de l'équipement
        equipment.setId(request.getIdEquip());
        equipment.setName(request.getNameE());
        equipment.setMarque(request.getMarqueE());
        equipment.setType(request.getTypeE());
        equipment.setDomaine(request.getDomaineE());
        equipment.getCentre().setNameCentre(request.getCentre());

        // Enregistrer les modifications de l'équipement
        equipment = equipmentRepository.save(equipment);

        // Mise à jour des autres champs de l'intervention
        intervention.setEquipment(equipment);
        intervention.setTypeI(request.getTypeI());
        intervention.setDateDI(request.getDateDI());
        intervention.setDateFI(request.getDateFI());
        intervention.setEtatE(request.getEtatE());
        intervention.setObservations(request.getObservations());
        intervention.setIntervenant(intervenant);

        // Enregistrer les modifications de l'intervention
        interventionRepository.save(intervention);
    }
    
   /* @Transactional(readOnly = true)
    public InterventionDto getInterventionById(Long idIntervention) {
        Intervention intervention = interventionRepository.findById(idIntervention)
                .orElseThrow(() -> new IllegalArgumentException("Intervention non trouvée avec l'ID : " + idIntervention));

        // Création d'un nouvel objet InterventionDto
        InterventionDto interventionDto = new InterventionDto();

        // Assignation des valeurs de l'intervention à l'objet InterventionDto
        interventionDto.setIdI(intervention.getIdI());
        interventionDto.setIdEquip(intervention.getEquipment().getId());
        interventionDto.setNameE(intervention.getEquipment().getName());
        interventionDto.setTypeE(intervention.getEquipment().getType());
        interventionDto.setMarqueE(intervention.getEquipment().getMarque());
        interventionDto.setDomaineE(intervention.getEquipment().getDomaine());
        interventionDto.setCentre(intervention.getEquipment().getCentre().getNameCentre());
        interventionDto.setTypeI(intervention.getTypeI());
        interventionDto.setDateDI(intervention.getDateDI());
        interventionDto.setDateFI(intervention.getDateFI());
        interventionDto.setEtatE(intervention.getEtatE());
        interventionDto.setCinIntervenant(intervention.getIntervenant().getCinIntervenant());
        interventionDto.setNameIntervenant(intervention.getIntervenant().getNameIntervenant());
        interventionDto.setObservations(intervention.getObservations());

        return interventionDto;
    }*/
    @Transactional(readOnly = true)
    public InterventionDto getInterventionById(Long idIntervention) {
        Optional<Intervention> interventionOptional = interventionRepository.findById(idIntervention);

        if (interventionOptional.isPresent()) {
            Intervention intervention = interventionOptional.get();
            return mapInterventionToDto(intervention);
        } else {
            // Lever une exception si l'intervention n'est pas trouvée
            throw new RuntimeException("Intervention non trouvée avec l'ID: " + idIntervention);
        }
    }
   
}