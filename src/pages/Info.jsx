import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllCars } from '../utilites/api';

const Info = () => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [carData, setCarData] = useState(null);
    
    // Access URL params (make, model, year) with useParams
    const { make: urlMake, model: urlModel, year: urlYear } = useParams();
    const navigate = useNavigate();

    // Update the state based on URL params when they change
    useEffect(() => {
        if (urlMake && urlModel && urlYear) {
            fetchCarData(urlMake, urlModel, urlYear);
        } else {
            // If not all params are available, reset car data
            setCarData(null);
        }
    }, [urlMake, urlModel, urlYear]);

    const fetchCarData = async (make, model, year) => {
        const data = await getAllCars(make, model, year);
        setCarData(data);
    };

    const handleSearch = () => {
        // Construct the new URL with parameters for make, model, and year
        navigate(`/cars/${make}/${model}/${year}`);
    };

    return (
        <div>
            <h1>Search for a Car</h1>
            <input
                type="text"
                placeholder="Make"
                value={make}
                onChange={(e) => setMake(e.target.value)}
            />
            <input
                type="text"
                placeholder="Model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
            />
            <input
                type="text"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            {carData && (
                <div>
                    <h2>Car Data:</h2>
                    <pre>{JSON.stringify(carData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default Info;