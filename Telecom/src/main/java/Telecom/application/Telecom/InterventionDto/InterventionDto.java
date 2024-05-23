package Telecom.application.Telecom.InterventionDto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class InterventionDto {
    private Long idI;
    private Long idEquip;
    private String nameE;
    private String typeE;
    private String marqueE;
    private String domaineE;
    private String centre;
    private String typeI;
    private String dateDI;
    private String dateFI;
    private String etatE;
    private Long cinIntervenant; 
    private String nameIntervenant;
    private String observations;
}