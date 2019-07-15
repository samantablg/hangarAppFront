package com.company.repository;

import com.company.model.Price;
import com.company.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PriceRepository extends JpaRepository<Price, Long> {

    @Query("SELECT p FROM Price p WHERE p.product = ?1 and p.price =?2")
    Price findPriceByProductAndPrice(Product product, float price);

    @Query("SELECT p FROM Price p WHERE p.product = ?1")
    List<Price> findPricesByProduct(Product product);

}
