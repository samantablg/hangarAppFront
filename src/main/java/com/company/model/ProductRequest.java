package com.company.model;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class ProductRequest {

    @NotEmpty
    private String name;

    private String description;

    private Hangar hangar;

    @NotNull
    private long quantity;

    @NotNull
    private float price;

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

    public ProductRequest(String name, Hangar hangar, float price) {
        this.name = name;
        this.hangar = hangar;
        this.price = price;
    }

    public ProductRequest(@NotEmpty String name, String description, Hangar hangar, float price) {
        this.name = name;
        this.description = description;
        this.hangar = hangar;
        this.price = price;
    }

    public ProductRequest(@NotEmpty String name, String description, Hangar hangar, long quantity, float price) {
        this.name = name;
        this.description = description;
        this.hangar = hangar;
        this.quantity = quantity;
        this.price = price;
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

    public String getDescription() { return description; }

    public void setDescription(String description) {
        this.description = description;
    }

    public float getPrice() { return price; }

    public void setPrice(float price) { this.price = price; }

    public long getQuantity() { return quantity; }

    public void setQuantity(long quantity) { this.quantity = quantity;  }
}
