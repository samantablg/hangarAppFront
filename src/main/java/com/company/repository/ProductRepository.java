package com.company.repository;

import com.company.model.Hangar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.company.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM  Product p WHERE p.name = ?1 and p.hangar =?2")
    Product findProductByNameAndAndHangar(String name, Hangar hangar);
}