package com.company.model;


import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

@Entity
@Table(name = "PRODUCT_HANGAR")
@IdClass(Product_Hangar_PK.class)
public class Product_Hangar implements Serializable {

    private static final long serialVersionUID = -3064410667944568907L;

    @Id
    //@ManyToOne(cascade=CascadeType.ALL, fetch = FetchType.EAGER)
    //@JoinColumn(name = "hangar", foreignKey = @ForeignKey(name="hangar_fk"))
    @Column(name = "hangar")
    //@NotEmpty
    private long hangar;
    @Id
    //@ManyToOne(cascade=CascadeType.ALL, fetch = FetchType.EAGER)
    //@JoinColumn(name = "product", foreignKey = @ForeignKey(name="product_fk"))
    @Column(name = "product")
    //@NotEmpty
    private long product;
    @Column(name = "amount")
    private long amount;

    //public Product_Hangar() { }

   /* public Product_Hangar(@NotEmpty long hangar, @NotEmpty long product, long amount) {
        this.hangar = hangar;
        this.product = product;
        this.amount = amount;
    }*/

    public long getHangar() {
        return hangar;
    }

    public void setHangar(long hangar) {
        this.hangar = hangar;
    }

    public long getProduct() {
        return product;
    }

    public void setProduct(long product) {
        this.product = product;
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }
}
