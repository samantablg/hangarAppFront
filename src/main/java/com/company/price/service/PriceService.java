package com.company.price.service;

import com.company.price.model.Price;
import com.company.product.model.Product;

public interface PriceService {

    Price createEntryPrice(Product product, float price);



}
