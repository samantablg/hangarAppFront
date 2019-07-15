package com.company.controller;

import com.company.model.Product_Hangar;
import com.company.service.Product_HangarServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class Product_HangarController {

    @Autowired
    Product_HangarServiceImpl product_hangarService;

    //TODO existe producto, exiiste hangar...
    @PostMapping(value = "productOfHangar", produces = "application/json; charset=utf-8")
    public Object addProductToHangar(@RequestBody Product_Hangar product_hangar) {
        return product_hangarService.associateProductToHangar(product_hangar);
    }
}
