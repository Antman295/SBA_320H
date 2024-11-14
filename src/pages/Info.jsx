import {useParams} from 'react-router-dom';
import { getAllCars } from '../utilites/api';

export default function Info() {
    const { make, model } = useParams();

    useEffect(() => {
        async function fetchData() {
            const carData = await getAllCars();
            console.log("Car Data:", carData);
        }
        fetchData();
    }, [make, model]);

    return <div>Car Info</div>
}

