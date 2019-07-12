package com.company.service;

import java.util.List;

import com.company.model.Product;

public interface ProductService {

	List<Product> getAllProducts();

	List<Product> getAllActiveProducts();

	Product getProduct(Long id);

	Product createProduct(Product product);

	Product createProductToHangar(Product product, Long id);
	
	List<Product> getAllProductsOfHangar(Long id);

	Product deleteProduct(Long id);

	Product filterName(char letter);

	Product updateState(Long id);

	Product updateQuantity(Long id, Long quantity);

	Product createEntryPrice(Product product, float price);

	boolean existProduct(Long id);

}
