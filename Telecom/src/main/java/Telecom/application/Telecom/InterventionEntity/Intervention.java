package Telecom.application.Telecom.InterventionEntity;

import Telecom.application.Telecom.entity.Equipment;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="intervention")
public class Intervention {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idI;
	
	@ManyToOne
	@JoinColumn(name="equip_id")
	private Equipment equipment;

	@Column(name="typeIntervention")
	private String typeI;
	@Column(name="dateDebutIntervention")
	private String dateDI;
	@Column(name="dateFinIntervention")
	private String dateFI;
	@Column(name="etatIntervention")
	private String etatE;
	@ManyToOne
	@JoinColumn(name="intervenant_id")
	private Intervenant intervenant;
	
	@Column(name="observations")
	private String observations;
}
