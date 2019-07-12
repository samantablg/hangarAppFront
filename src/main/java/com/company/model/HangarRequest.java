package com.company.model;

import javax.validation.constraints.NotEmpty;

public class HangarRequest {

    @NotEmpty
    private String name;

    @NotEmpty
    private String address;

    public HangarRequest() { }

    public HangarRequest(String name, String address) {
        this.name = name;
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() { return address; }

    public void setAddress(String address) { this.address = address; }
}
