import axios from "axios";

export const fetchData = async () => {

    const url = 'https://covid19.mathdro.id/api';

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url)
        return { confirmed, recovered, deaths, lastUpdate }

    } catch (error) {
        return error
    }
}

export const fetchDailyData = async () => {
    const url = 'https://covid19.mathdro.id/api';
    try {
      const { data } = await axios.get(`${url}/daily`);
  
      return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
      return error;
    }
  };

export const fetchCountries = async () => {
    const url = 'https://covid19.mathdro.id/api';

    try {
        const { data: { countries } } = await axios.get(`${url}/countries`)

        return countries.map((country) => country.name)

    } catch (error) {
        console.log(error)
    }
}