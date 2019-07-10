package com.company.hangar.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.company.hangar.model.Hangar;
import org.springframework.data.jpa.repository.Query;

public interface HangarRepository extends JpaRepository<Hangar, Long> {

    @Query("SELECT h FROM  Hangar h WHERE h.name = ?1 and h.address = ?2")
    Hangar findHangarByNameAndAdress(String name, String address);
}
