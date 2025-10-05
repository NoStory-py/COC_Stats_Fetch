package com.example.coc_stats.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Clan {
    private String tag;
    private String name;
    private String type;
    private String description;
    private int clanLevel;
    private int clanPoints;
    private int clanBuilderBasePoints;
    private int clanCapitalPoints;
    private String warFrequency;
    private int warWinStreak;
    private int warWins;
    private int members;
}
