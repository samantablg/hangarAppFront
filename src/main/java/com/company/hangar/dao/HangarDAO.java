package com.company.hangar.dao;

import java.util.List;

import com.company.hangar.model.Hangar;

public interface HangarDAO {
	
	public List<Hangar> getAllHangars();

	public Hangar getHangar(Long id);
	
	public Hangar createHangar(Hangar reqHangar);
	
	public Hangar deleteHangar(Long id);

}
