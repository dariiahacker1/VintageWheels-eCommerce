package com.dealership.vintagewheels.controller;

import com.dealership.vintagewheels.model.ContactForm;
import com.dealership.vintagewheels.service.EmailService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/contact-seller")
public class ContactSellerController {

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<String> sendContactSellerEmail(@Valid @RequestBody ContactForm form, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body("All fields are required.");
        }

        String subject = "New Inquiry: " + form.getFirstName() + " " + form.getLastName();
        String text = String.format(
                "Name: %s %s\nEmail: %s\nPhone: %s\nMessage: %s",
                form.getFirstName(), form.getLastName(), form.getEmail(), form.getPhone(), form.getMessage()
        );
        emailService.sendMessage(form.getRecipientEmail(), subject, text);
        return ResponseEntity.ok("Message sent successfully!");
    }

}
