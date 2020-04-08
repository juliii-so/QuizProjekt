package de.nrw.lwk.springboot.dto;

public class PostDaten {
	private String name;
	private boolean richtig;

	public PostDaten() {
	}

	public PostDaten(String name, boolean richtig) {
		this.name = name;
		this.richtig = richtig;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean isRichtig() {
		return richtig;
	}

	public void setRichtig(boolean richtig) {
		this.richtig = richtig;
	}
//
}
