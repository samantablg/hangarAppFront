package com.company.dao;

import com.company.model.Product_Hangar;

import java.util.List;

public interface Product_HangarDAO {

    Product_Hangar addProductToHangar(Product_Hangar product_hangar);

    List<Product_Hangar> getAll();

    List<Product_Hangar> getProductsOfHangar(long hangar);

    List<Product_Hangar> getHangarsOfProduct(long product);

}
