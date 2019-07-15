package com.company.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.company.model.Hangar;
import com.company.repository.HangarRepository;

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

		if(hangarRepository.findHangarByNameAndAddress(hangar.getName(), hangar.getAddress()) == null)
			return hangarRepository.save(hangar);
		return null;
	}

	/*@Override
	public Hangar deleteHangar(Long id) {
		
		Hangar hangar = hangarRepository.getOne(id);
		if(hangar != null)
			hangarRepository.delete(hangar);
		return null;
	}*/

	@Override
	public boolean existHangar(Long id) {
		return hangarRepository.existsById(id);
	}

}
