import React, { useState } from 'react';
import './CSS/FAQ.css';
import faq from '../Components/Assets/faq';

const FAQ = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(prevIndex => prevIndex === index ? null : index);
    };

    return (
        <div className="faq">
            <h1>Frequently asked questions</h1>

            <div className="questions">
                {
                    faq.map((faqItem, index) => (
                        <div key={index} className="faq-item">

                            <div className="question" onClick={() => toggleAnswer(index)}>
                                <p>{faqItem.question} {openIndex === index ? '▲' : '▼'}</p>
                            </div>

                            {openIndex === index && (
                                <div className="answer">
                                    {faqItem.answer}
                                </div>
                            )}

                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FAQ;
