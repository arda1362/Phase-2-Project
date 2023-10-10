import React, { useEffect, useState } from 'react';

function ApiData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://newton.vercel.app/api/v2/popular')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h2>External API Data</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ApiData;
