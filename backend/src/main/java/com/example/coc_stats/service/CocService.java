package com.example.coc_stats.service;
import java.net.URI;
import java.net.URISyntaxException;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.coc_stats.config.ApiConfig;
import com.example.coc_stats.model.Clan;
import com.example.coc_stats.model.Player;

@Service
public class CocService {

    private final RestTemplate restTemplate = new RestTemplate();

    public Player getPlayer(String playerTag) {
        try {
            String url = ApiConfig.BASE_URL + "/players/%23" + playerTag;
            URI uri = new URI(url);

            HttpHeaders headers = new HttpHeaders();

            headers.set("Authorization", "Bearer " + ApiConfig.API_TOKEN);
            headers.set("Accept", "application/json");

            HttpEntity<String> entity = new HttpEntity<>(headers);

            ResponseEntity<Player> response = restTemplate.exchange(
                uri,
                HttpMethod.GET,
                entity,
                Player.class
            );

            return response.getBody();
        } catch(URISyntaxException e){
            return null;
        }
    }

    public Clan getClan(String clanTag){
        try {
            String url = ApiConfig.BASE_URL + "/clans/%23" + clanTag;
            URI uri = new URI(url);

            HttpHeaders headers = new HttpHeaders();

            headers.set("Authorization", "Bearer " + ApiConfig.API_TOKEN);
            headers.set("Accept", "application/json");

            HttpEntity<String> entity = new HttpEntity<>(headers);

            ResponseEntity<Clan> response = restTemplate.exchange(
                uri,
                HttpMethod.GET,
                entity,
                Clan.class
            );

            return response.getBody();

        } catch(URISyntaxException e){
            return null;
        }
    }
    
    
}
