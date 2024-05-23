package Telecom.application.Telecom.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Table(name="centre")
public class Centre {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="idCentre")
    private Long idCentre;
	@Column(name="name")
	private String nameCentre;
}
