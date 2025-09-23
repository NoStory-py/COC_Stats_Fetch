package com.example.coc_stats.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.coc_stats.model.Clan;
import com.example.coc_stats.model.Player;
import com.example.coc_stats.service.CocService;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class CocController {

    @Autowired
    private CocService cocService;

    @GetMapping("/player/{playerTag}")
    public Player getPlayer(@PathVariable String playerTag) {
        return cocService.getPlayer(playerTag);
    }

    @GetMapping("/clan/{clanTag}")
    public Clan getMethodName(@PathVariable String clanTag) {
        return cocService.getClan(clanTag);
    }
}
