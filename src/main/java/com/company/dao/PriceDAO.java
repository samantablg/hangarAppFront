package com.company.dao;

import com.company.model.Price;

import java.util.List;

public interface PriceDAO {

    List<Price> getAllPrices();

    Price getProductPrice(Long id);

    List<Price> getAllPricesOfProducts(Long id);
}
