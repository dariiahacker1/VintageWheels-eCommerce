package com.dealership.vintagewheels.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ContactForm {

    @NotBlank(message = "Please provide a first name")
    private String firstName;

    @NotBlank(message = "Please provide a last name")
    private String lastName;

    @Email(message = "Please provide a valid email address")
    private String email;

    @NotBlank(message = "PLease provide a phone number")
    private String phone;

    @NotBlank(message = "Please provide a mail body")
    private String message;

    @NotBlank
    private String recipientEmail;
}
