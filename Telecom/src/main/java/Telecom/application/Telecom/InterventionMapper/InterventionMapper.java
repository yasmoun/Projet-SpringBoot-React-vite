/* package Telecom.application.Telecom.InterventionMapper;

import Telecom.application.Telecom.InterventionDto.InterventionDto;
import Telecom.application.Telecom.InterventionEntity.Intervention;

public class InterventionMapper {
public static InterventionDto mapToInterventionDto(Intervention intervention) {
	return new InterventionDto(
			intervention.getIdI(),
			intervention.getNameE(),
			intervention.getTypeE(),
			intervention.getMarqueE(),
			intervention.getDomaineE(),
			intervention.getCentre(),
			intervention.getTypeI(),
			intervention.getDateDI(),
			intervention.getDateFI(),
			intervention.getEtatE(),
			intervention.getNameIntervenant(),
			intervention.getObservations()
			);
}

public static Intervention mapToIntervention(InterventionDto interventionDto) {
	return new Intervention(
			interventionDto.getIdI(),
			interventionDto.getNameE(),
			interventionDto.getTypeE(),
			interventionDto.getMarqueE(),
			interventionDto.getDomaineE(),
			interventionDto.getCentre(),
			interventionDto.getTypeI(),
			interventionDto.getDateDI(),
			interventionDto.getDateFI(),
			interventionDto.getEtatE(),
			interventionDto.getNameIntervenant(),
			interventionDto.getObservations()
			);
}
}
*/