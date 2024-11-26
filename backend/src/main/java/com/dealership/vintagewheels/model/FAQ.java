package com.dealership.vintagewheels.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class FAQ {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String question;
    @Lob
    @Column(nullable = false, columnDefinition = "TEXT")
    private String answer;
}
