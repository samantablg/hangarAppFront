package com.company.service;

import com.company.model.Hangar;
import com.company.model.Product_Hangar;

import java.util.List;

public interface Product_HangarService {

    Product_Hangar associateProductToHangar(Product_Hangar product_hangar);

    List<Product_Hangar> getAll();

    List<Product_Hangar> getProductsOfHangar(long id);

    List<Product_Hangar> getHangarsOfProduct(long id);

}
