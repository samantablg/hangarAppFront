package com.company.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Table(name = "price")
public class Price {

    @Id
    @GeneratedValue(strategy = javax.persistence.GenerationType.IDENTITY )
    private long id;
    @Column(name="date")
    private Date date;
    @Column(name="price")
    @NotNull
    private float price;
    @ManyToOne(fetch = FetchType.EAGER)
    @NotNull
    @JoinColumn(name="product")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Product product;

    public Price() { }

    public Price(Product product, float price) {
        this.product = product;
        this.price = price;
        this.date = new Date();
    }

    public Price(Product product, float price, Date date) {
        this.product = product;
        this.price = price;
        this.date = date;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
