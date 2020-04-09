package de.nrw.lwk.springboot.dto;

public class FrageDto {

	private String frage;
	private String richtigeAntwort;
	private String fAntwort1;
	private String fAntwort2;
	private String fAntwort3;

	public FrageDto() {

	}

	public FrageDto(String frage, String richtigeAntwort, String fAntwort1, String fAntwort2, String fAntwort3) {
		this.frage = frage;
		this.richtigeAntwort = richtigeAntwort;
		this.fAntwort1 = fAntwort1;
		this.fAntwort2 = fAntwort2;
		this.fAntwort3 = fAntwort3;
	}

	public String getFrage() {
		return frage;
	}

	public void setFrage(String frage) {
		this.frage = frage;
	}

	public String getRichtigeAntwort() {
		return richtigeAntwort;
	}

	public void setRichtigeAntwort(String richtigeAntwort) {
		this.richtigeAntwort = richtigeAntwort;
	}

	public String getfAntwort1() {
		return fAntwort1;
	}

	public void setfAntwort1(String fAntwort1) {
		this.fAntwort1 = fAntwort1;
	}

	public String getfAntwort2() {
		return fAntwort2;
	}

	public void setfAntwort2(String fAntwort2) {
		this.fAntwort2 = fAntwort2;
	}

	public String getfAntwort3() {
		return fAntwort3;
	}

	public void setfAntwort3(String fAntwort3) {
		this.fAntwort3 = fAntwort3;
	}

}
