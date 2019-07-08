package com.company.controller;

import java.util.List;

import com.company.product.model.ProductResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.company.product.model.Product;
import com.company.product.service.ProductService;

import javax.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ProductController {

	@Autowired
	ProductService productService;

	//TODO cambiar la relación, tengo que conectar los servicios no los controladores

	@Autowired
	HangarController hangarController;
	
	@GetMapping("/products")
	public List<Product> getAllProducts() { return productService.getAllProducts();	}
	
	@GetMapping("/product/{id}")
	public Product getProductById(@PathVariable Long id) { return productService.getProduct(id); }
	
	@PostMapping("/product")
	public Product createProduct(@Valid @RequestBody Product product) {
		Product newProduct = new Product(product.getName(), product.getHangar());
		return productService.createProduct(newProduct);
	}
	
	@PostMapping("/hangar/{id}/product")
	public Product createProductToHangar(@Valid @RequestBody Product product, @PathVariable Long id) {
		Product newProduct = new Product(product.getName(), hangarController.getHangartById(id));
		return productService.createProduct(newProduct);
	}
	
	/* Este método ya no se usa, se utiliza el estado activo o inactivo

	@DeleteMapping("/product/{id}")
	public Product deleteProduct(@PathVariable Long id) {
		return productService.deleteProduct(id);
	}
	*/

	@GetMapping("/hangar/{id}/products")
	public List<Product> showProductsOfHangar(@PathVariable Long id) {
		return productService.getAllProductsOfHangar(id);
	}

	@GetMapping("products/search/{letter}")
	public ProductResponse filterProducts(@PathVariable char letter) {
	    Product filterProduct = productService.filterName(letter);
		return new ProductResponse(filterProduct.getName(), filterProduct.getHangar());
	}

}
