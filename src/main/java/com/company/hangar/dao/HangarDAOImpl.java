package com.company.hangar.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.company.hangar.model.Hangar;
import com.company.hangar.repository.HangarRepository;

@Component
public class HangarDAOImpl implements HangarDAO {
	
	@Autowired
	HangarRepository hangarRepository;
	
	public List<Hangar> getAllHangars() {
		
		List<Hangar> hangars = hangarRepository.findAll();
		if(hangars !=null)  
			return hangars;
		return null;
		
	}

	@Override
	public Hangar getHangar(Long id) {
		
		Hangar hangar = hangarRepository.getOne(id);
		if(hangar != null)
			return hangar;
		return null;
		
	}

	@Override
	public Hangar createHangar(Hangar hangar) {
		
		Hangar saveHangar = hangarRepository.save(hangar);
		if(saveHangar != null)
			return saveHangar;
		return null;
	}

	@Override
	public Hangar deleteHangar(Long id) {
		
		Hangar hangar = hangarRepository.getOne(id);
		if(hangar != null)
			hangarRepository.delete(hangar);
		return null;
	}

}
