export const getAllCars= async (make, model, year) => {
try {
    const response = await fetch(`https://thingproxy.freeboard.io/fetch/https://api-ninjas.com/api/cars?make=${make}&model=${model}&year=${year}`, {
        headers: {
            'X-Api-Key': 'Y4bD5SkLSpvpq22iB3W6cw==aJO13M7tNi8wmX72'
        }
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error('Error fetching data:', response.status, errorText);
        return [];
    }

    const data = await response.json();
    console.log('API Response:', data);
    return data.results || [];
} catch (error) {
    console.error('Fetch error:', error);
    return [];
}
};