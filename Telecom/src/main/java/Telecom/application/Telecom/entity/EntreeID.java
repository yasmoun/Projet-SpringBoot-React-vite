package Telecom.application.Telecom.entity;
import java.io.Serializable;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Data
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Embeddable
public class EntreeID implements Serializable {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long centreId;
    private Long equipId;

}
