package com.company.service;

import com.company.model.Price;
import com.company.model.Product;

public interface PriceService {

    Price createEntryPrice(Product product, float price);

}
