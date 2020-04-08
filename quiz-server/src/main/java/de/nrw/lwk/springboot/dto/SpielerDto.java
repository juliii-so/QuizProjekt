package de.nrw.lwk.springboot.dto;

public class SpielerDto {

	private String name;
	private int anzahlFragen;
	private int anzahlRichtig;
	private int punkte;

	public SpielerDto() {

	}

	public SpielerDto(String name, int anzahlFragen, int anzahlRichtig) {
		this.name = name;
		this.anzahlFragen = anzahlFragen;
		this.anzahlRichtig = anzahlRichtig;
		this.punkte = anzahlRichtig / anzahlFragen;
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
		this.punkte = anzahlRichtig / anzahlFragen;
	}

	public int getAnzahlRichtig() {
		return anzahlRichtig;
	}

	public void setAnzahlRichtig(int anzahlRichtig) {
		this.anzahlRichtig = anzahlRichtig;
		this.punkte = anzahlRichtig / anzahlFragen;
	}

	public int getPunkte() {
		return punkte;
	}

	public void setPunkte(int punkte) {
		this.punkte = anzahlRichtig / anzahlFragen;
	}

}
