package com.company.product.service;

import java.util.List;

import com.company.product.model.Product;

public interface ProductService {

	List<Product> getAllProducts();

	Product getProduct(Long id);

	Product createProduct(Product product);

	Product createProductToHangar(String name, Long id);
	
	List<Product> getAllProductsOfHangar(Long id);

	//Product deleteProduct(Long id);

	Product filterName(char letter);

}
