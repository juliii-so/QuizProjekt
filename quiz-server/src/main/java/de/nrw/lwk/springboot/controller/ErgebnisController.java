/**

 * 

 */

package de.nrw.lwk.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import de.nrw.lwk.springboot.dto.PostDaten;
import de.nrw.lwk.springboot.entities.SpielerEntity;
import de.nrw.lwk.springboot.repositories.SpielerRepository;

@Controller
public class ErgebnisController {
	@Autowired
	SpielerRepository spielerRepository;

	@RequestMapping(method = RequestMethod.POST, path = "/speichereAntwort", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public SpielerEntity ergebnisPost(@RequestBody PostDaten pd) {
		SpielerEntity spieler;
		if (spielerRepository.existsById(pd.getName())) {
			spieler = spielerRepository.findByName(pd.getName());
			spieler.punkteAktualisieren(pd.isRichtig());
			spielerRepository.deleteById(pd.getName());
		} else {
			spieler = new SpielerEntity(pd.getName(), 1, (pd.isRichtig() ? 1 : 0));
		}
		return spielerRepository.save(spieler);
	}

	@RequestMapping(method = RequestMethod.GET, path = "/getPlatz", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public SpielerEntity ergebnisGet(@RequestParam("platz") int platz) {

		return spielerRepository.findAllByOrderByPunkteDesc().get(platz);
	}

	@RequestMapping(method = RequestMethod.GET, path = "/getSpieler", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public SpielerEntity ergebnisGet(@RequestParam("name") String name) {

		return spielerRepository.findByName(name);
	}
}