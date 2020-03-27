/**

 * 

 */

package de.nrw.lwk.springboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller

@RequestMapping("/home")
public class HomeController {

	@GetMapping("/home")
	public String homeGet() {
		System.out.println("index wird angefordert GET");
		return "index.html";
	}

	@PostMapping("/home")
	public String homePost() {
		System.out.println("index wird angefordert POST");
		return "index.html";
	}

}