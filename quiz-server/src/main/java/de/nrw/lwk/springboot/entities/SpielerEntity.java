package de.nrw.lwk.springboot.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name = "SpielerEntity")
@Table(name = "Quiz_Highscore")
public class SpielerEntity {
	@Id
	private String name;
	private int anzahlFragen;
	private int anzahlRichtig;
	private int punkte;

	public SpielerEntity() {

	}

	public SpielerEntity(String name, int anzahlFragen, int anzahlRichtig) {
		this.name = name;
		this.anzahlFragen = anzahlFragen;
		this.anzahlRichtig = anzahlRichtig;
		this.punkte = (anzahlRichtig * 100) / anzahlFragen;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAnzahlFragen() {
		return anzahlFragen;
	}

	public void setAnzahlFragen(int anzahlFragen) {
		this.anzahlFragen = anzahlFragen;
		this.punkte = (anzahlRichtig * 100) / anzahlFragen;
	}

	public int getAnzahlRichtig() {
		return anzahlRichtig;
	}

	public void setAnzahlRichtig(int anzahlRichtig) {
		this.anzahlRichtig = anzahlRichtig;
		this.punkte = (anzahlRichtig * 100) / anzahlFragen;
	}

	public int getPunkte() {
		return punkte;
	}

	public void setPunkte(int punkte) {
		this.punkte = punkte;
	}

	public void setPunkte() {
		this.punkte = (anzahlRichtig * 100) / anzahlFragen;
	}

	public void punkteAktualisieren(boolean richtig) {
		this.anzahlFragen++;
		this.anzahlRichtig += (richtig ? 1 : 0);
		this.setPunkte();

	}

}
