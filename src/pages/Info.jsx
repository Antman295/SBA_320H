import { useParams } from 'react-router-dom';

export default function Info() {
  const { make, model } = useParams();  // Get 'make' and 'model' from the URL
  return (
    <div>
      <h3>Information for {make} {model}</h3>
      {/* Display information based on make and model */}
    </div>
  );
}

