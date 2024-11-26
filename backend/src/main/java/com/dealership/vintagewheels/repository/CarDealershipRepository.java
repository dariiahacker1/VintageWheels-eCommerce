package com.dealership.vintagewheels.repository;

import com.dealership.vintagewheels.model.CarDealership;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarDealershipRepository extends JpaRepository<CarDealership, Long> {}
