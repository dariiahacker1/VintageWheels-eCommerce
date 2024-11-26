package com.dealership.vintagewheels.model;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@Entity
@Table(name="cars")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    private String price;
    private String location;
    private int year;
    private String make;
    private String model;
    private String exteriorColor;
    private String interiorColor;
    private String transmission;
    private String engineSize;
    private int odometer;
    @Column(nullable = false)
    private String ownerMail;
    @ElementCollection
    private List<String> categories = new ArrayList<>();
    @ElementCollection
    private List<String> images = new ArrayList<>();
}
