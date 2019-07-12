package com.company.dao;

import com.company.model.Price;
import com.company.model.Product;
import com.company.repository.PriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PriceDAOImpl implements PriceDAO {

    @Autowired
    PriceRepository priceRepository;

    @Override
    public Price createEntryPrice(Price price) {

        /*TODO crear una query para filtrar por producto, precio y fecha
          -> no quiero crear una entrada de precio con el mismo precio que hay actualmente pero si puede volver a tener un precio anterior
          -> se puede actualizar una vez cada día ¿?
        */
        if(priceRepository.findPriceByProductAndPrice(price.getProduct(), price.getPrice()) == null) {
            return priceRepository.save(price);
        }
        return null;
    }

    @Override
    public List<Price> getAllPrices() {
        return priceRepository.findAll();
    }

    @Override
    public Price getProductPrice(Long id) {
        return null;
    }

    @Override
    public List<Price> getAllPricesOfProduct(Product product) {
        return priceRepository.findPricesByProduct(product);
    }
}
