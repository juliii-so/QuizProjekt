package de.nrw.lwk.springboot.entities;

import java.util.Random;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity(name = "FrageEntity")
@Table(name = "Quiz_Fragen")
public class FrageEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
	@NotNull
	private String frage;
	@NotNull
	private String antwortR;
	@NotNull
	private String antwortF1;
	private String antwortF2;
	private String antwortF3;

	public FrageEntity() {

	}

	public FrageEntity(String frage, String antwortR, String antwortF1, String antwortF2, String antwortF3) {
		this.frage = frage;
		this.antwortR = antwortR;
		this.antwortF1 = antwortF1;
		this.antwortF2 = antwortF2;
		this.antwortF3 = antwortF3;
	}

	public String toJson() {
		String json = "";

		Random random = new Random();
		switch (random.nextInt(3)) {
		case 0:
			json = "['id'=" + id + ";'frage'=" + frage + ";'richtig'=0;'antworten'=[" + antwortR + ","
					+ antwortF1 + "," + antwortF2 + "," + antwortF3 + "]]";
			break;
		case 1:
			json = "['id'=" + id + ";'frage'=" + frage + ";'richtig'=1;'antworten'=[" + antwortF1 + ","
					+ antwortR + "," + antwortF2 + "," + antwortF3 + "]]";
			break;
		case 2:
			json = "['id'=" + id + ";'frage'=" + frage + ";'richtig'=2;'antworten'=[" + antwortF2 + "," + antwortF1
					+ "," + antwortR + "," + antwortF3 + "]]";
			break;
		default:
			json = "['id'=" + id + ";'frage'=" + frage + ";'richtig'=3;'antworten'=[" + antwortF3 + "," + antwortF1
					+ "," + antwortF2 + "," + antwortR + "]]";
		}
		return json;
	}

	public String getFrage() {
		return frage;
	}

	public void setFrage(String frage) {
		this.frage = frage;
	}

	public String getantwortR() {
		return antwortR;
	}

	public void setantwortR(String antwortR) {
		this.antwortR = antwortR;
	}

	public String getantwortF1() {
		return antwortF1;
	}

	public void setantwortF1(String antwortF1) {
		this.antwortF1 = antwortF1;
	}

	public String getantwortF2() {
		return antwortF2;
	}

	public void setantwortF2(String antwortF2) {
		this.antwortF2 = antwortF2;
	}

	public String getantwortF3() {
		return antwortF3;
	}

	public void setantwortF3(String antwortF3) {
		this.antwortF3 = antwortF3;
	}

}
