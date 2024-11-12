import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react';

export default function CarInfo() {
    const [car, setCar] = useState(null);
    const { model } = useParams();

    const url = `https://api.api-ninjas.com/v1/cars?limit=2&model=${model}`;

    async function getData(){
        try {
            let res = await fetch(url);
            let data = await res.json();

            setCoin(data);

        } catch (error) {
            console.error(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const loading = () => { 
        return <h1>Loading...</h1>
    };
}