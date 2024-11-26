package com.dealership.vintagewheels.controller;

import com.dealership.vintagewheels.model.Car;
import com.dealership.vintagewheels.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/cars")
public class CarController {

    @Autowired
    private CarService carService;

    @GetMapping("/all")
    public List<Car> getAllCars() {
        return carService.getAllCars();
    }

    @PostMapping("/addCar")
    public Car addCar(@RequestBody Car car) {
        return carService.saveCar(car);
    }

    @DeleteMapping("/{id}")
    public void deleteCar(@PathVariable Long id) {
        carService.deleteCar(id);
    }
}
