export const fetchFAQData = async () => {
    try {
        const response = await fetch('http://localhost:8080/faqs/all');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const allFAQs = await response.json();
        return allFAQs;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};