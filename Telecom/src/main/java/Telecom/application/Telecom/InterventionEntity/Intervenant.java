package Telecom.application.Telecom.InterventionEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "intervenant")
public class Intervenant {
    @Id
    private Long cinIntervenant;

    @Column(name = "nameIntervenant")
    private String nameIntervenant;
}