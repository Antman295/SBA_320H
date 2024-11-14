import { Link } from 'react-router-dom';
import { getAllCars } from '../utilites/api';
import { useEffect, useState } from 'react';

export default function Make() {
  const [makes, setMakes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const carMakes = await getAllCars();
      console.log("Fetched car makes:", carMakes)
      setMakes(carMakes);
    }

    fetchData();

  }, []);

    return (
      <div>
        <h1>Select a Car Make</h1>
        {makes && makes.length > 0 ? (
      makes.map((make) => (
        <div key={make.url}>
          <Link to={`/v1/${make.make}`}>
            {make.make}
          </Link>
        </div>
      ))
    ) : (
      <p>No car makes available.</p> // Display a message if makes is empty
    )}
      </div>
    );
  }