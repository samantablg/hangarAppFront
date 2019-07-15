package com.company.dao;

import java.util.List;

import com.company.model.Product;

public interface ProductDAO {
	
	List<Product> getAllProducts();
	
	Product getProduct(Long id);
	
	Product createProduct(Product product);
	
	Product deleteProduct(Long id);

	boolean existProduct(Long id);

	Product updateProduct(Product product);

	boolean existProductByName(Product product);

}
