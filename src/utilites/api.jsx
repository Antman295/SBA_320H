export async function getAllCars() {
    const url = 'https://thingproxy.freeboard.io/fetch/https://api-ninjas.com/api/cars';
    const apiKey = 'Y4bD5SkLSpvpq22iB3W6cw==aJO13M7tNi8wmX72';

    try {
        const response = await fetch(url, {
            headers: {
                'X-Api-Key': apiKey,
            }
        });

        if (!response.ok) {
            // Log the status and error text for more details
            const errorText = await response.text();
            console.error('Error fetching data:', response.status, errorText);
            return [];
        }

        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error('Fetch error:', error);
        return [];
    }
}