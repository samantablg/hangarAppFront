package com.company.price.dao;

import com.company.price.model.Price;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PriceDAOImpl implements PriceDAO {

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
