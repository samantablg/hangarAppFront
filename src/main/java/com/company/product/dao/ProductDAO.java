package com.company.product.dao;

import java.util.List;

import com.company.product.model.Product;

public interface ProductDAO {
	
	public List<Product> getAllProducts();
	
	public Product getProduct(Long id);
	
	public Product createProduct(Product product);
	
	public Product deleteProduct(Long id);

}
