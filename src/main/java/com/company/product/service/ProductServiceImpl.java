package com.company.product.service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import com.company.hangar.service.HangarServiceImpl;

import com.company.price.service.PriceServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.company.product.dao.ProductDAO;
import com.company.product.model.Product;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductDAO productDAO;

	@Autowired
	HangarServiceImpl hangarService;

	@Autowired
	PriceServiceImpl priceService;

	@Override
	public List<Product> getAllProducts() {

		List<Product> products = productDAO.getAllProducts();
		if(products != null)
			return products;
		throw new ProductNotFoundException();
	}

	@Override
	public List<Product> getAllActiveProducts() {

		List<Product> products = productDAO.getAllProducts();
		List<Product> result = new ArrayList<>();

		if(products != null) {
			for(Product p: products)
				if(p.isState())
					result.add(p);

			return result;
		}
		throw new ProductNotFoundException();
	}

	@Override
	public Product getProduct(Long id) {

		if(productDAO.existProduct(id))
			return productDAO.getProduct(id);
		throw new ProductNotFoundException(id);
	}


	@Override
	public Product createProduct(Product product) {

		if(hangarService.hangarExist(product.getHangar())) {
			if (!ProductOfHangarExist(product))
				return productDAO.createProduct(product);
			throw new ProductExistException();
		}
		throw new HangarExistException();
	}

	@Override
	public Product createProductToHangar(Product product, Long id) {

		if(hangarService.hangarExistById(id)) {
			product.setHangar(hangarService.getHangar(id));
			if (!ProductOfHangarExist(product))
				return productDAO.createProduct(product);
			throw new ProductExistException();
		}
		throw new HangarExistException();
	}

	@Override
	public List<Product> getAllProductsOfHangar(Long id) {

		List<Product> result = new ArrayList<>();
		List<Product> products = productDAO.getAllProducts();
		for(Product p: products) {
			if (p.getHangar().getId() == id) {
				result.add(p);
			}
		}

		if (result.size() > 0)
			return result;
		throw new ProductNotFoundException();
	}

	public Product deleteProduct(Long id) {

		if (productDAO.existProduct(id))
			return productDAO.deleteProduct(id);
		throw new ProductNotFoundException(id);
	}

	private boolean ProductOfHangarExist(Product product) {

		int cont = 0;
		try {
			List<Product> products = productDAO.getAllProducts();
			if (products.isEmpty())
				return false;

			for (Product p: products)
				if (p.getName().equals(product.getName()))
					cont++;

			if(cont == 0)
				return false;
			return true;
		}
		catch (Exception e) {
			return false;
		}
	}

	@Override
	public Product updateState(Long id) {

		if(productDAO.existProduct(id)) {
			Product product = productDAO.getProduct(id);
			if(product.isState()) {
				product.setState(false);
			} else {
				product.setState(true);
			}

			Product aProduct = product;
			return productDAO.updateProduct(aProduct);

		}
		throw new ProductNotFoundException(id);
	}

	@Override
	public Product updateQuantity(Long id, Long quantity) {

		if(productDAO.existProduct(id)) {
			Product product = productDAO.getProduct(id);
			long newQuantity = product.getQuantity() + quantity;
			product.setQuantity(newQuantity);
			if(newQuantity<=0) {
				updateState(id);
			}
			return productDAO.updateProduct(product);
		}
		throw new ProductNotFoundException(id);
	}

	@Override
	public Product createEntryPrice() {
		priceService.createEntryPrice().getProduct();
		return null;
	}

	/*Ejercicio java 8*/

	private List<Product> searchByFirstLetter(char letter) {

		List<Product> products = productDAO.getAllProducts();
		return products.stream()
				.filter((product) -> letter == product.getName().charAt(0))
				.collect(Collectors.toList());
	}

	private List<Product> convertToUpperCase(List<Product> products) {

		return products.stream()
				.map(p -> new Product(p.getName().toUpperCase(), p.getHangar()))
				.collect(Collectors.toList());
	}

	private Product filterProductByLength(List<Product> products) {
		return products.stream().max(Comparator.comparing(Product::getName)).get();
	}

	public Product filterName(char letter) {
		List<Product> listLetter = searchByFirstLetter(letter);

		List<Product> listUpper = convertToUpperCase(listLetter);
		return filterProductByLength(listUpper);
	}

	/*Exception*/

	//TODO manejarlas desde un fichero externo en /utils

	@ResponseStatus(value = HttpStatus.NOT_FOUND)
	private class ProductNotFoundException extends RuntimeException {

		private static final long serialVersionUID = 7295910574475009536L;

		public ProductNotFoundException() {
			super("There is not product");
		}

		public ProductNotFoundException(Long id) {
			super(String.format("The product %d doesn't exist", id));
		}
	}

	@ResponseStatus(value=HttpStatus.BAD_REQUEST)
	private class ProductEmptyException extends RuntimeException {

		private static final long serialVersionUID = -2343578248323481893L;

		public ProductEmptyException() {
			super("Product without info");
		}
	}

	@ResponseStatus(value=HttpStatus.BAD_REQUEST)
	private class ProductExistException extends RuntimeException {

		private static final long serialVersionUID = -8795820457855546654L;

		public ProductExistException() {
			super("Product already exist");
		}
	}

	@ResponseStatus(value=HttpStatus.BAD_REQUEST)
	private class HangarExistException extends RuntimeException {

		private static final long serialVersionUID = -8795820457855546654L;

		public HangarExistException() {
			super("Hangar not exist");
		}
	}

}
