import React, {useEffect, useState} from 'react';
import './CSS/FAQ.css';
import fetc from '../Components/Assets/fetchFAQ';
import {fetchFAQData} from "../Components/Assets/fetchFAQ";

const FAQ = () => {

    const [openIndex, setOpenIndex] = useState(null);
    const [allFAQs, setFAQs] = useState([]);

    useEffect(() => {
        const getFAQs = async () => {
            try {
                const faqData = await fetchFAQData();
                setFAQs(faqData);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };
        getFAQs();
    }, []);


    const toggleAnswer = (index) => {
        setOpenIndex(prevIndex => prevIndex === index ? null : index);
    };

    return (
        <div className="faq">
            <h1>Frequently asked questions</h1>

            <div className="questions">
                {
                    allFAQs.map((faqItem, index) => (
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
