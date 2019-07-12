package com.company.dao;

import com.company.model.Price;
import com.company.repository.PriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PriceDAOImpl implements PriceDAO {

    @Autowired
    PriceRepository priceRepository;

    @Override
    public Price createEntryPrice(Price price) {
        if(priceRepository.findPriceByProductAndPrice(price.getProduct(), price.getPrice()) != null) {
            return priceRepository.save(price);
        }
        return null;
    }

    @Override
    public List<Price> getAllPrices() {
        return null;
    }

    @Override
    public Price getProductPrice(Long id) {
        return null;
    }

    @Override
    public List<Price> getAllPricesOfProducts(Long id) {
        return null;
    }
}
