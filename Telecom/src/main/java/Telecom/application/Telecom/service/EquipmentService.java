package Telecom.application.Telecom.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Telecom.application.Telecom.dto.EquipmentDto;
import Telecom.application.Telecom.entity.Centre;
import Telecom.application.Telecom.entity.Entree;
import Telecom.application.Telecom.entity.EntreeID;
import Telecom.application.Telecom.entity.Equipment;
import Telecom.application.Telecom.repository.CentreRepository;
import Telecom.application.Telecom.repository.EntreeRepository;
import Telecom.application.Telecom.repository.EquipmentRepository;

@Service
public class EquipmentService {

    private final EquipmentRepository equipmentRepository;
    private final CentreRepository centreRepository;
    private final EntreeRepository entreeRepository;

    public EquipmentService(EquipmentRepository equipmentRepository, CentreRepository centreRepository, EntreeRepository entreeRepository) {
        this.equipmentRepository = equipmentRepository;
        this.centreRepository = centreRepository;
        this.entreeRepository = entreeRepository;
    }

    @Transactional
    public void addEquipment(EquipmentDto request) {
        // Recherche ou création du centre
        Centre centre = centreRepository.findByNameCentre(request.getCentre());
        if (centre == null) {
            centre = new Centre();
            centre.setNameCentre(request.getCentre());
            centre = centreRepository.save(centre);
        }

        // Création et enregistrement de l'équipement
        Equipment equipment = new Equipment();
        equipment.setId(request.getId());
        equipment.setName(request.getName());
        equipment.setType(request.getType());
        equipment.setMarque(request.getMarque());
        equipment.setDomaine(request.getDomaine());
        equipment.setCentre(centre);
        equipment = equipmentRepository.save(equipment);

        // Enregistrement de l'entrée
        EntreeID entreeId = new EntreeID();
        entreeId.setCentreId(centre.getIdCentre());
        entreeId.setEquipId(equipment.getId());
        Entree entree = new Entree();
        entree.setId(entreeId);
        entree.setDateEntree(request.getDate()); // Utiliser la date fournie dans la requête
        entreeRepository.save(entree);
    }
    @Transactional(readOnly = true)
    public EquipmentDto getEquipmentById(Long equipmentId) {
        Equipment equipment = equipmentRepository.findById(equipmentId)
                .orElseThrow(() -> new IllegalArgumentException("Equipement non trouvé avec l'ID : " + equipmentId));
        
        // Récupérer l'entrée associée à cet équipement
        EntreeID entreeId = new EntreeID();
        entreeId.setCentreId(equipment.getCentre().getIdCentre());
        entreeId.setEquipId(equipment.getId());
        Entree entree = entreeRepository.findById(entreeId)
                            .orElseThrow(() -> new IllegalArgumentException("Entree non trouvée pour l'équipement avec l'ID : " + equipmentId));

        // Créer un DTO pour l'équipement et y inclure la date d'entrée
        EquipmentDto equipmentDto = mapEquipmentToDto(equipment);
        equipmentDto.setDate(entree.getDateEntree());

        return equipmentDto;
    }
    public List<EquipmentDto> getAllEquipments() {
        List<Equipment> equipments = equipmentRepository.findAll();
        return mapEquipmentListToDtoList(equipments);
    }

    private List<EquipmentDto> mapEquipmentListToDtoList(List<Equipment> equipments) {
        return equipments.stream()
                .map(this::mapEquipmentToDto)
                .collect(Collectors.toList());
    }

    private EquipmentDto mapEquipmentToDto(Equipment equipment) {
        EquipmentDto equipmentDto = new EquipmentDto();
        equipmentDto.setId(equipment.getId());
        equipmentDto.setName(equipment.getName());
        equipmentDto.setType(equipment.getType());
        equipmentDto.setMarque(equipment.getMarque());
        equipmentDto.setDomaine(equipment.getDomaine());
        equipmentDto.setCentre(equipment.getCentre().getNameCentre());
        // Récupérer la date d'entrée à partir de l'entité Entree associée à l'équipement
        EntreeID entreeId = new EntreeID();
        entreeId.setCentreId(equipment.getCentre().getIdCentre());
        entreeId.setEquipId(equipment.getId());
        Entree entree = entreeRepository.findById(entreeId)
                            .orElseThrow(() -> new IllegalArgumentException("Entree non trouvée pour l'équipement avec l'ID : " + equipment.getId()));
        equipmentDto.setDate(entree.getDateEntree());
        
        return equipmentDto;
    }
    public void updateEquipment(Long id, EquipmentDto request) {
        Equipment existingEquipment = equipmentRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Equipment not found"));

        // Mettre à jour les champs de l'équipement existant avec les données de la requête
        existingEquipment.setId(request.getId());
        existingEquipment.setName(request.getName());
        existingEquipment.setType(request.getType());
        existingEquipment.setMarque(request.getMarque());
        existingEquipment.setDomaine(request.getDomaine());

        // Récupérer le centre correspondant au nom fourni dans la requête
        Centre centre = centreRepository.findByNameCentre(request.getCentre());

        // Mettre à jour le centre de l'équipement
        existingEquipment.setCentre(centre);
     // Mettre à jour la date d'entrée de l'équipement
        EntreeID entreeId = new EntreeID();
        entreeId.setCentreId(centre.getIdCentre());
        entreeId.setEquipId(existingEquipment.getId());
        Entree entree = entreeRepository.findById(entreeId)
                            .orElseThrow(() -> new IllegalArgumentException("Entree non trouvée pour l'équipement avec l'ID : " + existingEquipment.getId()));
        entree.setDateEntree(request.getDate()); // Mettre à jour la date d'entrée
        entreeRepository.save(entree);
        // Enregistrer les modifications
        equipmentRepository.save(existingEquipment);
    }
}