package com.company.service;

import com.company.model.Product_Hangar;

import java.util.List;

public interface Product_HangarService {

    Product_Hangar associateProductToHangar(Product_Hangar product_hangar);

    List<Product_Hangar> getProductsOfHangars();
}
