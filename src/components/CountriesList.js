// src/components/CountriesList.js
import React, { useState, useEffect } from 'react';
import { getCountries } from '../services/CountryService';

function CountriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getCountries();
      setCountries(data);
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}

export default CountriesList;
