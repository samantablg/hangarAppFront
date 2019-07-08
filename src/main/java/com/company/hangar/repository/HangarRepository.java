package com.company.hangar.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.company.hangar.model.Hangar;

public interface HangarRepository extends JpaRepository<Hangar, Long> {}
