package com.company.hangar.service;

import java.util.List;

import com.company.hangar.model.Hangar;

public interface HangarService {
	
	List<Hangar> getAllHangars();
	
	Hangar getHangar(Long id);
	
	Hangar createHangar(Hangar hangar);
	
	//Hangar deleteHangar(Long id);

	boolean hangarExist(Hangar hangar);

	boolean hangarExistById(Long id);
	
}
