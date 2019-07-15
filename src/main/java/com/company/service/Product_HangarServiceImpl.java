package com.company.service;

import com.company.dao.Product_HangarDAO;
import com.company.model.Product_Hangar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Product_HangarServiceImpl implements Product_HangarService {

    @Autowired
    Product_HangarDAO product_hangarDAO;

    @Override
    public Product_Hangar associateProductToHangar(Product_Hangar product_hangar) {
        return product_hangarDAO.addProductToHangar(product_hangar);
    }

    @Override
    public List<Product_Hangar> getProductsOfHangars() {
        return product_hangarDAO.getProductsOfHangar();
    }
}
