export async function getAllCars() {
    const url = 'https://api-ninjas.com/api/cars';

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(error);
    }
}