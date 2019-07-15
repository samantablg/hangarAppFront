package com.company.service;

import com.company.dao.PriceDAO;
import com.company.model.Price;
import com.company.model.Product;
import com.company.utils.PriceException;
import com.company.utils.ProductException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PriceServiceImpl implements PriceService {

    @Autowired
    PriceDAO priceDAO;

    @Autowired
    ProductServiceImpl productService;

    @Override
    public Price createEntryPrice(Product product, float price) {
        try {
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

    @Override
    public Price createEntryPriceToProduct(Long id, float price) {

        if(productService.existProduct(id)) {
            Product product = productService.getProduct(id);
            Price newPrice = new Price(product, price);
            return priceDAO.createEntryPrice(newPrice);
        }
        throw new PriceException.PriceNotFoundException();
    }

    @Override
    public List<Price> getAllPricesOfProduct(Long id) {

        if(productService.existProduct(id)) {
            Product product = productService.getProduct(id);
            return priceDAO.getAllPricesOfProduct(product);
        }
        throw new ProductException.ProductExistException();
    }
}
