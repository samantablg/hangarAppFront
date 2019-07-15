package com.company.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

@Entity
@Table(name="HANGAR")
public class Hangar implements Serializable {

	private static final long serialVersionUID = -3064410667944568903L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name="name")
	@NotEmpty
	private String name;
    @Column(name="address")
	@NotEmpty
	private String address;
    @Column(name="state")
    private boolean state = true;

	/*public Hangar() {}
	
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
	}*/

	
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
