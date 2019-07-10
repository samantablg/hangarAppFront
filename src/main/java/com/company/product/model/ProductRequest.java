package com.company.product.model;

import com.company.hangar.model.Hangar;

import javax.validation.constraints.NotEmpty;

public class ProductRequest {

    @NotEmpty
    private String name;

    private String description;

    private Hangar hangar;

    public ProductRequest() {  }

    public ProductRequest(String name) {
        this.name = name;
    }

    public ProductRequest(@NotEmpty String name, String description) {
        this.name = name;
        this.description = description;
    }

    public ProductRequest(@NotEmpty String name, String description, Hangar hangar) {
        this.name = name;
        this.description = description;
        this.hangar = hangar;
    }

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
