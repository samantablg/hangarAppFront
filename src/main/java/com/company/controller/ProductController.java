package com.company.controller;

import java.util.List;

import com.company.product.model.ProductRequest;
import com.company.product.model.ProductResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

	@GetMapping("/products")
	public List<Product> getAllActiveProducts() { return productService.getAllActiveProducts();	}

	@GetMapping("/allProducts")
	public List<Product> getAllProducts() { return productService.getAllProducts();	}
	
	@GetMapping("/product/{id}")
	public Product getProductById(@PathVariable Long id) { return productService.getProduct(id); }

	//TODO refactor código -> manejo de excepciones en servicio
	@PostMapping("/product")
	public HttpStatus createProduct(@Valid @RequestBody ProductRequest product) {
		Product newProduct = new Product(product.getName(), product.getDescription(), product.getQuantity(), product.getHangar());
		try {
			productService.createProduct(newProduct);
			productService.createEntryPrice(newProduct, product.getPrice());
		} catch(Exception e){
			return HttpStatus.BAD_REQUEST;
		}

		return HttpStatus.OK;
	}

	//TODO refactor código -> manejo de excepciones en servicio
	@PostMapping("/hangar/{id}/product")
	public HttpStatus createProductToHangar(@Valid @RequestBody ProductRequest product, @PathVariable Long id) {
		Product newProduct = new Product(product.getName(), product.getDescription(), product.getQuantity());
		try {
			productService.createProductToHangar(newProduct, id);
			productService.createEntryPrice(newProduct, product.getPrice());
		} catch(Exception e) {
			return HttpStatus.BAD_REQUEST;
		}
		return HttpStatus.OK;
	}

	@PostMapping("/product/{id}/price")
	public Product UpdatePrice(@PathVariable Long id, @RequestBody float price) {
		Product product = productService.getProduct(id);
		return productService.createEntryPrice(product, price);
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
	public Product updateState(@PathVariable Long id) {	return productService.updateState(id); }

	@PutMapping("/product/{id}/{quant}")
	public Product updateQuantity(@PathVariable Long id, @PathVariable Long quant) { return productService.updateQuantity(id, quant); }

    /*@PostMapping("/price")
	public Product testPrice(Product product, float price) {
		return productService.createEntryPrice(product, price);
	}
*/
}
