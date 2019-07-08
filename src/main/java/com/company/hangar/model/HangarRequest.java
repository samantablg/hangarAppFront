package com.company.hangar.model;

import javax.validation.constraints.NotEmpty;

public class HangarRequest {

    @NotEmpty
    private String name;

    //@NotEmpty
    //private String adress;

    public HangarRequest() { }

    public HangarRequest(String name) {
        this.name = name;
        //this.adress = adress;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    //public String getAdress() { return adress; }

    //public void setAdress(String adress) { this.adress = adress; }
}
