import { Link } from 'react-router-dom';
import { getAllCars } from '../utilites/api';
import { useEffect, useState } from 'react';

export default function Make() {
  const [makes, setMakes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const carMakes = await getAllCars();
      setMakes(carMakes);
    }

    fetchData();

  }, []);

    return (
      <div>
        <h1>Select a Car Make</h1>
        {makes.map((make) => (
          <div key={make.url}>
            <Link to={`/v1/${make.make}`}>
              {make.make}
            </Link>
            </div>
        ))}
      </div>
    );
  }