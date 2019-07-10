package com.company.price.model;

import com.company.product.model.Product;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

/*@Entity
@Table(name = "PRICE")*/
public class Price {

    private long id;
    private Product product;
    private double price;
    private Date date;

    public Price() { }

    public Price(Product product, double price) {
        this.product = product;
        this.price = price;
    }

    public Price(Product product, double price, Date date) {
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

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
