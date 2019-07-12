package com.company.price.dao;

import com.company.price.model.Price;

import java.util.List;

public interface PriceDAO {

    List<Price> getAllPrices();

    Price getProductPrice(Long id);

    List<Price> getAllPricesOfProducts(Long id);
}
