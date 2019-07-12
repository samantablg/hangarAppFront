package com.company.service;

import com.company.dao.PriceDAO;
import com.company.model.Price;
import com.company.model.Product;
import com.company.utils.PriceException;
import com.company.utils.ProductException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PriceServiceImpl implements PriceService {

    @Autowired
    PriceDAO priceDAO;

    @Autowired
    ProductService productService;

    @Override
    public Price createEntryPrice(Product product, float price) {
        try {
            productService.createProduct(product);
            Price newEntry = new Price(product, price);
            return priceDAO.createEntryPrice(newEntry);
        } catch (Exception e) {
            throw new ProductException.ProductExistException();
        }
    }

    @Override
    public List<Price> getAllPrices() {

        List<Price> prices = priceDAO.getAllPrices();
        if(prices != null)
            return prices;
        throw new PriceException.PriceNotFoundException();
    }
}
