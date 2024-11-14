import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import {getAllCars} from '../utilites/api'

export default function Make (){
    const [makes, setMakes] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const makes = await getAllCars();
            setMakes(makes);
        }

        fetchData();

    }, []);

    return (
        <div className="makes">
            {makes.map((make) => (
                <div key={make}>
                    <Link to={`/v1/${make}`}>
                    {make}
                    </Link>
                    </div>
            ))}
        </div>
    )
}