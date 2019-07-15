package com.company.repository;

import com.company.model.Product_Hangar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Product_HangarRepository extends JpaRepository<Product_Hangar, Long> {}
