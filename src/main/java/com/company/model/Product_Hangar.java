package com.company.model;


import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

@Entity
@Table(name = "PRODUCT_HANGAR")
public class Product_Hangar implements Serializable {

    @Id
    @ManyToOne(cascade=CascadeType.ALL, fetch = FetchType.EAGER)
    //@JoinColumn(name = "hangar", foreignKey = @ForeignKey(name="hangar_fk"))
    @JoinColumn(name = "hangar")
    @NotEmpty
    private Hangar hangar;
    @Id
    @ManyToOne(cascade=CascadeType.ALL, fetch = FetchType.EAGER)
    //@JoinColumn(name = "product", foreignKey = @ForeignKey(name="product_fk"))
    @JoinColumn(name = "product")
    @NotEmpty
    private Product product;
    @Column(name = "amount")
    private long amount ;

    public Product_Hangar() { }

    public Product_Hangar(@NotEmpty Hangar hangar, @NotEmpty Product product, long amount) {
        this.hangar = hangar;
        this.product = product;
        this.amount = amount;
    }

    public Hangar getHangar() {
        return hangar;
    }

    public void setHangar(Hangar hangar) {
        this.hangar = hangar;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }
}
