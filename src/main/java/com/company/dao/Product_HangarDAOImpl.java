package com.company.dao;

import com.company.model.Product_Hangar;
import com.company.repository.Product_HangarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Product_HangarDAOImpl implements Product_HangarDAO {

    @Autowired
    Product_HangarRepository product_hangarRepository;

    @Override
    public Product_Hangar addProductToHangar(Product_Hangar product_hangar) {
        return product_hangarRepository.save(product_hangar);
    }

    @Override
    public List<Product_Hangar> getProductsOfHangar() {
        return product_hangarRepository.findAll();
    }
}
