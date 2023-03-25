import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [count, setCount] = useState(6);

  const handleShowAll = () => {
      setShowAll(true)
      setCount(count + 6)
  }

  useEffect(() => {
    const loadCountries = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    };
    loadCountries();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-10">
        {countries.slice(0, showAll ? count : count).map((country) => (
          <Country key={country.cca3} country={country} />
        ))}
      </div>      
      <span onClick={handleShowAll} className="text-center"><Button>Show All</Button></span>
    </>
  );
};

export default Countries;
