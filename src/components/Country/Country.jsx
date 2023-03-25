import React from "react";

const Country = ({ country }) => {
  const { name, flags, area, population, capital } = country;
  return (
    <div className="card w-96 glass">
      <figure className="p-4">
        <img className="h-52 w-full rounded-md" src={flags.png} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name.common}</h2>
        <p>Area: {area ? area : "Area not found!"}</p>
        <p>Population: {population ? population : "Population not found!"}</p>
        <p>Capital{capital ? capital[0] : "Capital not found!"}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Detail</button>
        </div>
      </div>
    </div>
  );
};

export default Country;
