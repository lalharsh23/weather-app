// CitiesTable.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './CitiesTable.css';

const CitiesTable = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('https://public.opendatasoft.com/explore/dataset/geonames-all-cities-with-a-population-1000/api/?disjunctive.cou_name_en&sort=name')
      .then(response => response.json())
      .then(data => setCities(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="CitiesTable">
      <h1>Cities Table</h1>
      <table>
        <thead>
          <tr>
            <th>City Name</th>
            <th>Country</th>
            <th>Timezone</th>
          </tr>
        </thead>
        <tbody>
          {cities.map(city => (
            <tr key={city.recordid}>
              <td>
                <Link to={`/weather/${city.recordid}`}>{city.fields.name}</Link>
              </td>
              <td>{city.fields.country}</td>
              <td>{city.fields.timezone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CitiesTable;
