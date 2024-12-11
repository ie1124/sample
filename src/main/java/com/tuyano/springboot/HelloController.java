package com.tuyano.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class HelloController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/roulette")
    public String roulette() {
        return "roulette";
    }

    @GetMapping("/highlow")
    public String highlow() {
        return "highlow";
    }

    @PostMapping("/reset")
    public String reset() {
        return "redirect:/";
    }
}