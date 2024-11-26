package com.dealership.vintagewheels.controller;

import com.dealership.vintagewheels.model.CarDealership;
import com.dealership.vintagewheels.service.CarDealershipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/locations")
public class CarDealershipController {

    @Autowired
    private CarDealershipService carDealershipService;

    @GetMapping("/all")
    public List<CarDealership> getAllCarDealerships() {
        return carDealershipService.getAllCarDealerships();
    }

    @PostMapping("/addLocation")
    public CarDealership addCarDealership(@RequestBody CarDealership carDealership) {
       return carDealershipService.saveCarDealership(carDealership);
    }

    @DeleteMapping("/{id}")
    public void deleteLCarDealership(@PathVariable long id) {
        carDealershipService.deleteCarDealership(id);
    }

}
