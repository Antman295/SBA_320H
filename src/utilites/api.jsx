export async function getAllCars() {
    const url = 'https://api-ninjas.com/api/cars';
    const apiKey = 'Y4bD5SkLSpvpq22iB3W6cw==aJO13M7tNi8wmX72';

    try {
        const response = await fetch(url, {
            headers: {
                'X-Api-Key': apiKey,
            }
        });

        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(error);
    }
}