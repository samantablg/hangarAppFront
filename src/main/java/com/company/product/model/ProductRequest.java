package com.company.product.model;

import com.company.hangar.model.Hangar;

public class ProductRequest {

    private String name;

    private Hangar hangar;

    public ProductRequest(String name, Hangar hangar) {
        this.name = name;
        this.hangar = hangar;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setHangar(Hangar hangar) {
        this.hangar = hangar;
    }

    public Hangar getHangar() {
        return hangar;
    }
}
