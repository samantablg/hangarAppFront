package com.company.hangar.model;

import javax.persistence.*;

@Entity
@Table(name="HANGAR")
public class Hangar {

	@Id
	//@GeneratedValue(strategy=GenerationType.AUTO)
	@GeneratedValue(strategy = javax.persistence.GenerationType.IDENTITY )
	private long id;
	@Column(name="name")
	private String name;
    @Column(name="address")
	private String address;
    @Column(name="state")
    private boolean state = true;

	public Hangar() {}
	
	public Hangar(String name, String address)
	{
		this.name = name;
		this.address = address;
	}
	
	public Hangar(long id) {
		this.id = id;
	}
	
	public Hangar(long id, String name, String address) {
		this.id = id;
		this.name = name;
		this.address = address;
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
	public String getAddress() { return address; }
	public void setAddress(String address) { this.address = address; }
	public boolean isState() {
		return state;
	}
	public void setState(boolean state) {
		this.state = state;
	}
}
