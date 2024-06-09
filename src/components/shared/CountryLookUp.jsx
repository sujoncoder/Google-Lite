"use client";

import { useEffect, useState } from "react";

const CountryLookUp = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(
          `https://ipinfo.io/json?token=${process.env.MY_IP}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCountry(data.country);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the country:", error);
        setLoading(false);
      }
    };

    fetchCountry();
  }, []);
  return (
    <>
      <h2 className="text-slate-500">{country}</h2>
    </>
  );
};

export default CountryLookUp;
