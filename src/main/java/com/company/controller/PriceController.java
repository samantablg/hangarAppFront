package com.company.controller;

import com.company.hangar.model.Hangar;
import com.company.price.model.Price;
import com.company.price.service.PriceServiceImpl;
import com.company.product.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class PriceController {

    @Autowired
    PriceServiceImpl priceService;

    @PostMapping("/price")
    public Price testPrice() {
        return priceService.createEntryPrice();
    }
}
