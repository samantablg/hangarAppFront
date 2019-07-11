package com.company.controller;

import java.util.List;

import com.company.price.model.Price;
import com.company.price.service.PriceServiceImpl;
import com.company.product.model.ProductRequest;
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

	/*@Autowired
	PriceServiceImpl priceService;*/

	@GetMapping("/products")
	public List<Product> getAllActiveProducts() { return productService.getAllActiveProducts();	}

	@GetMapping("/allProducts")
	public List<Product> getAllProducts() { return productService.getAllProducts();	}
	
	@GetMapping("/product/{id}")
	public Product getProductById(@PathVariable Long id) { return productService.getProduct(id); }
	
	@PostMapping("/product")
	public Product createProduct(@Valid @RequestBody ProductRequest product) {
		Product newProduct = new Product(product.getName(), product.getDescription(), product.getQuantity(), product.getHangar());
		return productService.createProduct(newProduct);
	}
	
	@PostMapping("/hangar/{id}/product")
	public Product createProductToHangar(@Valid @RequestBody ProductRequest product, @PathVariable Long id) {
		Product newProduct = new Product(product.getName(), product.getDescription(), product.getQuantity());
		return productService.createProductToHangar(newProduct, id);
	}
	
	/* Este método ya no se usa, se utiliza el estado activo o inactivo*/

	@DeleteMapping("/product/{id}")
	public Product deleteProduct(@PathVariable Long id) {
		return productService.deleteProduct(id);
	}

	@GetMapping("/hangar/{id}/products")
	public List<Product> showProductsOfHangar(@PathVariable Long id) {
		return productService.getAllProductsOfHangar(id);
	}

	@GetMapping("/products/search/{letter}")
	public ProductResponse filterProducts(@PathVariable char letter) {
	    Product filterProduct = productService.filterName(letter);
		return new ProductResponse(filterProduct.getName(), filterProduct.getHangar());
	}

	@PutMapping("/product/{id}")
	public Product updateState(@PathVariable Long id)
	{
		return productService.updateState(id);
	}

	@PutMapping("/product/{id}/{quant}")
	public Product updateQuantity(@PathVariable Long id, @PathVariable Long quant) { return productService.updateQuantity(id, quant); }

/*	@PostMapping("/price")
	public Price testPrice() {
		return priceService.createEntryPrice();
	}*/

}
