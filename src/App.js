import { data } from "./mockData";
import { useEffect, useState } from "react";

function App() {
 




  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [activeCity, setActiveCity] = useState(null);
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    const filterCity = data.filter((elem) => {
      return elem.country === country;
    });
    setCity(filterCity[0]?.cities);
    setLanguage(null);
  }, [country]);

  useEffect(() => {
    if (activeCity !== null) {
      const filterlang = city?.filter((elem) => {
        return elem.city === activeCity;
      });

      setLanguage(filterlang[0]?.language);
    }
  }, [activeCity]);

  return (
    <div>
      <div>
        {/* ------------------- country ------------------------ */}
        <label htmlFor="CountrySelect"> Please select a country - </label>
        <select
          className="border border-gray-400"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
          id="CountrySelect"
        >
          <option value="">select</option>
          {data?.map((elem, index) => {
            return (
              <option key={index} value={elem?.country}>
                {elem?.country}
              </option>
            );
          })}
        </select>
      </div>

      {/* ------------------- city ------------------------ */}
      <div>
        {city && (
          <>
            <label htmlFor="CitySelect"> Please select a city - </label>
            <select data-testid="city"
            id="CitySelect"
              className="border border-gray-400"
              onChange={(e) => setActiveCity(e.target.value)}
              value={activeCity}
            >
              <option value="">select</option>
              {city?.map((elem, index) => {
                return (
                  <option key={index} value={elem?.city}>
                    {elem?.city}
                  </option>
                );
              })}
            </select>
          </>
        )}
      </div>

      {/* ------------------- language ------------------------ */}

      <div>
        {language && (
          <>
            <label htmlFor="LangSelect"> Please select a Language - </label>
            <select id="LangSelect" className="border border-gray-400">
              <option value="">select</option>
              {language?.map((elem, index) => {
                return <option key={index}>{elem}</option>;
              })}
            </select>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

