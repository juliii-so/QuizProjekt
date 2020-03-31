/**

 * 

 */

package de.nrw.lwk.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import de.nrw.lwk.springboot.dto.FrageDto;
import de.nrw.lwk.springboot.entities.FrageEntity;
import de.nrw.lwk.springboot.repositories.FragenRepository;

@Controller
public class FragenController {
	@Autowired
	FragenRepository fragenRepository;

	@RequestMapping(method = RequestMethod.GET, path = "/getFragen", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<FrageEntity> fragenGet() {

		return (List<FrageEntity>) fragenRepository.findAll();
	}

	@RequestMapping(method = RequestMethod.GET, path = "/getFrage", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public FrageEntity frageGet(@RequestParam("index") int index) {

		return ((List<FrageEntity>) fragenRepository.findAll()).get(index);
	}

	public FrageEntity frageHinzufuegen(FrageEntity frage) {
		return fragenRepository.save(frage);
	}

	@RequestMapping(method = RequestMethod.POST, path = "/getFragen", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public List<FrageEntity> homePost() {
		return (List<FrageEntity>) fragenRepository.findAll();
	}

}