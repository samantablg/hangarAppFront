package com.company.service;

import com.company.model.Price;
import com.company.model.Product;

import java.util.List;

public interface PriceService {

    Price createEntryPrice(Product product, float price);

    List<Price> getAllPrices();

}
