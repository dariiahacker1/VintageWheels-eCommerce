package com.dealership.vintagewheels.service;

import com.dealership.vintagewheels.model.FAQ;
import com.dealership.vintagewheels.repository.FAQRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FAQService {

    @Autowired
    private FAQRepository faqRepository;

    public List<FAQ> getAllFAQs() {
        return faqRepository.findAll();
    }

    public FAQ saveFAQ(FAQ faq) {
        return faqRepository.save(faq);
    }

    public void deleteFaq(Long id) {
        faqRepository.deleteById(id);
    }

}
