package com.company.product.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.company.product.model.Product;
import com.company.product.repository.ProductRepository;

@Component
public class ProductDAOImpl implements ProductDAO {
	
	@Autowired
	ProductRepository productRepository;

	@Override
	public List<Product> getAllProducts() {
		
		List<Product> products = productRepository.findAll();
		if(products != null)
			return products;
		return null;
	}

	@Override
	public Product getProduct(Long id) {
		
		Product product = productRepository.getOne(id);
		if(product != null)
			return product;
		return null;
	}
	
	@Override
	public Product createProduct(Product product) {
		
		Product saveProduct = productRepository.save(product);
		if(saveProduct != null)
			return saveProduct;		
		return null;
	}
	
	public Product deleteProduct(Long id) {
		
		Product product = productRepository.getOne(id);
		if(product != null)
			productRepository.delete(product);
		return null;	
	}

}
