package com.company.product.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import com.company.hangar.model.Hangar;

@Entity
@Table(name = "PRODUCT")
public class Product {

	@Id
	@GeneratedValue(strategy = javax.persistence.GenerationType.IDENTITY )
	private long id;
	@Column(name = "name")
	private String name;
	@Column(name="description")
	private String  description;
	@Column(name="quantity")
	private long quantity = 1;
	@Column(name="state")
	private boolean state = true;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="hangar")
	private Hangar hangar;

	public Product() {}

	public Product(String name, String description) {
		this.name = name;
		this.description = description;
	}

	public Product(String name, Hangar hangar) {
		this.name = name;
		this.hangar = hangar;
	}

	public Product(String name, String description, Hangar hangar) {
		this.name = name;
		this.description = description;
		this.hangar = hangar;
	}

	public Product(String name, String description, long quantity) {
		this.name = name;
		this.description = description;
		this.quantity = quantity;
	}

	public Product(long id, String name, Hangar hangar) {
		this.id = id;
		this.name = name;
		this.hangar = hangar;
	}

	public Product(Long id, String name, String description, Hangar hangar) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.hangar = hangar;
	}

	public Product(String name, String description, long quantity, Hangar hangar) {
		this.name = name;
		this.description = description;
		this.quantity = quantity;
		this.hangar = hangar;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Hangar getHangar() {
		return hangar;
	}

	public void setHangar(Hangar hangar) {
		this.hangar = hangar;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public long getQuantity() {	return quantity; }

	public void setQuantity(long quantity) { this.quantity = quantity; }

	public boolean isState() {
		return state;
	}

	public void setState(boolean state) {
		this.state = state;
	}
}
