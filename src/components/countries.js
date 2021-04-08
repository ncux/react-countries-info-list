import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "./navbar";
import Loading from "./loading/loading";
import { config } from "../config";

export const Countries = () => {

    const { countryUrl, countriesUrl, regionUrl, httpHeaders } = config;

    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [countries, setCountries] = useState([]);

    const fetchCountries = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(countriesUrl, httpHeaders);
            setCountries([...data]);
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };

    const filterRegion = async () => {
        try {
            if(region?.length) {
                setLoading(true);
                const { data } = await axios.get(`${regionUrl}${region.toLowerCase()}`, httpHeaders);
                setCountries([...data]);
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };

    const searchCountry = async (e) => {
        e.preventDefault();
        try {
            if(query?.length) {
                setCountry(query);
                setLoading(true);
                const { data } = await axios.get(`${countryUrl}${query}?fullText=true`, httpHeaders);
                console.log(data);
                setLoading(false);
                setQuery('');
            }
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };

    useEffect(() => fetchCountries(), []);

    useEffect(() => filterRegion(), [region]);

    if(loading) return (<Loading />);

    return (
        <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
            <div className="w-screen shadow-md px-3 py-6 bg-white dark:bg-gray-700 dark:text-white">
                <div className="container flex mx-auto">
                    <h1 className="font-bold text-xl">Where in the world?</h1>
                    <Navbar />
                </div>
            </div>
            <div className="container flex mx-auto mb-16">
                <i className="fa fa-search my-auto -mr-9 z-10 pr-2 pl-3 py-5 rounded-md text-gray-400"></i>
                <form onSubmit={ searchCountry } className="dark:bg-gray-700 pl-10 p-2 shadow-md rounded-md w-1/3">
                    <input
                        type="text"
                        value={ query }
                        onChange={ event => setQuery(event.target.value) }
                        placeholder="Type in country name"
                    />
                </form>
                <select onChange={ event => setRegion(event.target.value) } className="ml-auto my-2 p-2 shadow-md rounded-md font-medium bg-gray-700">
                    <option value="">Filter by region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>

            <div>
                
            </div>
        </div>
    );

};
