package Telecom.application.Telecom.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class EquipmentDto {
private Long id;
private String name;
private String type;
private String marque;
private String domaine;
private String centre;
private String date ;

}
