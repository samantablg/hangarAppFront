package com.company.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.company.model.Hangar;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface HangarRepository extends JpaRepository<Hangar, Long> {

    @Query("SELECT h FROM  Hangar h WHERE h.name = ?1 and h.address = ?2")
    Hangar findHangarByNameAndAddress(String name, String address);

}
