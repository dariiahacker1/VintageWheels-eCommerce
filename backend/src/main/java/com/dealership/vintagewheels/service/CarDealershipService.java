package com.dealership.vintagewheels.service;

import com.dealership.vintagewheels.model.CarDealership;
import com.dealership.vintagewheels.repository.CarDealershipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarDealershipService {

    @Autowired
    private CarDealershipRepository carDealershipRepository;

    public List<CarDealership> getAllCarDealerships(){
        return carDealershipRepository.findAll();
    }

    public CarDealership saveCarDealership(CarDealership carDealership){
        return carDealershipRepository.save(carDealership);
    }

    public void deleteCarDealership(Long id){
        carDealershipRepository.deleteById(id);
    }

}
