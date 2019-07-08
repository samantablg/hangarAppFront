package com.company.controller;

import com.company.hangar.model.Hangar;
import com.company.hangar.model.HangarRequest;
import com.company.hangar.service.HangarServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class HangarController {

	@Autowired
	HangarServiceImpl hangarService;

	@GetMapping(value="/hangars")
	public List<Hangar> getAllHangars() {
		return hangarService.getAllHangars();
	}

	@GetMapping("/hangar/{id}")
	public Hangar getHangartById(@PathVariable Long id) {
		return hangarService.getHangar(id);
	}

	@PostMapping("/hangar")
	public Hangar createHangar(@Valid @RequestBody HangarRequest hangar) {
		Hangar newHangar = new Hangar(hangar.getName());
		return hangarService.createHangar(newHangar);
	}

	/*@PostMapping("/hangar")
	public ResponseEntity<?> createHangar(@Valid RequestEntity<HangarRequest> reqHangar) {

		HangarRequest hangar = reqHangar.getBody();

		if( hangar.getName() == null) {
			return new ResponseEntity<>(new ErrorRest("Incorrect"), HttpStatus.BAD_REQUEST);
		} else {
			Hangar newHangar = new Hangar(hangar.getName());
			return new ResponseEntity<>(hangarService.createHangar(newHangar), HttpStatus.CREATED);
		}
	}*/

	/*Este método ya no se usa, se cambia el estado de activo a inactivo
	@DeleteMapping("/hangar/{id}")
	public Hangar deleteHangar(@PathVariable Long id) {
		return hangarService.deleteHangar(id);
	}
	*/

}
