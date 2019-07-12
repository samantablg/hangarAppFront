package com.company.repository;

import com.company.model.Price;
import com.company.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PriceRepository extends JpaRepository<Price, Long> {

    @Query("SELECT p FROM Price p WHERE p.product = ?1 and p.price =?2")
    Price findPriceByProductAndPrice(Product product, float price);

}
