/**

 * 

 */

package de.nrw.lwk.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import de.nrw.lwk.springboot.repositories.SpielerRepository;

@Controller
public class NamenController {
	@Autowired
	SpielerRepository spielerRepository;

	@RequestMapping(method = RequestMethod.GET, path = "/getNamen", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public String[] ergebnisGet() {

		return spielerRepository.getAlleNamen();
	}
}