export const fetchLocations = async () => {
    try {
        const response = await fetch('http://localhost:8080/locations/all');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const allLocations = await response.json();
        return allLocations;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};