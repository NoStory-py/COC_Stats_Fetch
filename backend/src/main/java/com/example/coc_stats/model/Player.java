package com.example.coc_stats.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Player {
    private String tag;
    private String name;
    private int townHallLevel;
    private int expLevel;
    private int trophies; 
    private int bestTrophies;
    private League league;
    private int warStars;
    private int attackWins;
    private int defenseWins;
    private int builderHallLevel;
    private int builderBaseTrophies;
    private int bestBuilderBaseTrophies;
    private BuilderLeague builderBaseLeague;
    private String role;
    
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public class League{
        private int id;
        private String name;
        private IconUrls iconUrls;

        @Data
        @NoArgsConstructor
        @AllArgsConstructor
        public class IconUrls{
            private String small;
            private String tiny;
            private String medium;
        }
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public class BuilderLeague{
        private String id;
        private String name;
    }

    
    
}
