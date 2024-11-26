export const fetchCarsData = async () => {
    try {
        const response = await fetch('http://localhost:8080/cars/all');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const allCars = await response.json();
        return allCars;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};