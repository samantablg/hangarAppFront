package com.company.service;

import com.company.model.Price;
import com.company.repository.PriceRepository;
import com.company.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PriceServiceImpl implements PriceService {

    @Autowired
    PriceRepository priceRepository;

    @Autowired
    ProductService productService;

    @Override
    public Price createEntryPrice(Product product, float price) {
        Price newEntry = new Price(product, price);
        return priceRepository.save(newEntry);
    }

    @Override
    public Price createEntryPrice2(Price price) {
        return priceRepository.save(price);
    }
}
