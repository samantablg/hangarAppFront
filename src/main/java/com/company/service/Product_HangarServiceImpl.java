package com.company.service;

import com.company.dao.Product_HangarDAO;
import com.company.model.Product_Hangar;
import com.company.utils.Product_HangarException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Product_HangarServiceImpl implements Product_HangarService {

    @Autowired
    Product_HangarDAO product_hangarDAO;

    @Autowired
    ProductServiceImpl productService;

    @Autowired
    HangarServiceImpl hangarService;

    @Override
    public Product_Hangar associateProductToHangar(Product_Hangar product_hangar) {
        if(hangarService.hangarExistById(product_hangar.getHangar()) && productService.existProduct(product_hangar.getProduct()))
            return product_hangarDAO.addProductToHangar(product_hangar);
        throw new Product_HangarException.Product_HangarNotExistException();
    }

    @Override
    public List<Product_Hangar> getProductsOfHangars() {
        return product_hangarDAO.getProductsOfHangar();
    }
}
