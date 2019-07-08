package com.company.hangar.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="HANGAR")
public class Hangar {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	@Column(name="name")
	private String name;
    //Column(name="adress")
	//private String adress;

	public Hangar() {}
	
	public Hangar(String name)
	{
		this.name = name;
		//this.adress = adress;
	}
	
	public Hangar(long id) {
		this.id = id;
	}
	
	public Hangar(long id, String name) {
		this.id = id;
		this.name = name;
		//this.adress = adress;
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
	//public String getAdress() { return adress; }
	//public void setAdress(String adress) { this.adress = adress; }
	
}
