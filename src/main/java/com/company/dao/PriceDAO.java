package com.company.dao;

import com.company.model.Price;
import com.company.model.Product;

import java.util.List;

public interface PriceDAO {

    Price createEntryPrice(Price price);

    List<Price> getAllPrices();

    Price getProductPrice(Long id);

    List<Price> getAllPricesOfProduct(Product product);
}
