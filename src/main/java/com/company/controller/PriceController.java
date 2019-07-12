package com.company.controller;

import com.company.model.Price;
import com.company.service.PriceService;
import com.company.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class PriceController {

    @Autowired
    PriceService priceService;

    @PostMapping("/product")
    public HttpStatus createProductWithPrice(@Valid @RequestBody Price price) {
        Product product = price.getProduct();
        System.out.println(product);
        float newPrice  = price.getPrice();
        try {

            priceService.createEntryPrice(product, newPrice);
        } catch(Exception e) {
            return HttpStatus.BAD_REQUEST;
        }
        return HttpStatus.OK;
    }

}
