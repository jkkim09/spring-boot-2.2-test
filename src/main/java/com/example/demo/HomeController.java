package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class HomeController {

	@RequestMapping("/")
	public ModelAndView index() {
		System.out.println("/index");
		ModelAndView mv = new ModelAndView("index");
		mv.addObject("key", "INDEX");
		return mv;
	}
	
	@RequestMapping("/test/test")
	public String home() {
		System.out.println("/test");
		return "Hello World! jk test";
	}
	
	@RequestMapping("/main/main")
	public ModelAndView main() {
		System.out.println("/main");
		ModelAndView mv = new ModelAndView("main");
		mv.addObject("key", "JKKIM");
		return mv;
	}
}
