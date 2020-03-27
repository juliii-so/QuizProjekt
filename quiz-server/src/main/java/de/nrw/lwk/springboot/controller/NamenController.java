/**

 * 

 */

package de.nrw.lwk.springboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class NamenController {

	@GetMapping("/getFragen")
	public String homeGet() {
		System.out.println("Fragen werden angefordert GET");
		return "index.html";
	}

	@PostMapping("/getFragen")
	public String homePost() {
		System.out.println("Fragen werden angefordert POST");
		return "index.html";
	}

}