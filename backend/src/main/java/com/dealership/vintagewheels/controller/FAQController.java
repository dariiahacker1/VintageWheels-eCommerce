package com.dealership.vintagewheels.controller;


import com.dealership.vintagewheels.model.FAQ;
import com.dealership.vintagewheels.service.FAQService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/faqs")
public class FAQController {

    @Autowired
    private FAQService faqService;

    @GetMapping("/all")
    public List<FAQ> getAllFAQs(){
        return faqService.getAllFAQs();
    }

    @PostMapping("/addFAQ")
    public FAQ addFAQ(@RequestBody FAQ faq){
        return faqService.saveFAQ(faq);
    }

    @DeleteMapping("/{id}")
    public void deleteFAQ(@PathVariable Long id){
        faqService.deleteFaq(id);
    }

}
