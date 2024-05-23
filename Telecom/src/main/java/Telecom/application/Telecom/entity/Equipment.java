package Telecom.application.Telecom.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name="equipment")
public class Equipment {
	@Id
	private Long id;
	@Column(name="name")
	private String name;
	@Column(name="type")
	private String type;
	@Column(name="marque")
	private String marque;
	@Column(name="domaine")
	private String domaine;
	

	@ManyToOne
	@JoinColumn(name="centre_id")
	private Centre centre;


}
