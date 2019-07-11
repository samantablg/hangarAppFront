package com.company.price.service;

import com.company.price.model.Price;
import com.company.price.repository.PriceRepository;
import com.company.product.model.Product;
import com.company.product.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PriceServiceImpl implements PriceService {

    @Autowired
    PriceRepository priceRepository;

    @Autowired
    ProductService productService;

    @Override
    public Price createEntryPrice() {

        Product product = productService.getProduct((long) 4);
        Price price = new Price(product, 5);
        System.out.println(price);
        return priceRepository.save(price);
    }

}
