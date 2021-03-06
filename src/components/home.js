import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./loading/loading";
import { Countries } from "./countries";

import { config } from "../config";

export const Home = () => {

    const { countriesUrl, regionUrl, httpHeaders } = config;

    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
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

    const filterCountry = async () => {
        try {
            if(query?.length) {
                setCountries([...countries?.filter(country => country?.name?.toLowerCase().includes(query.toLowerCase()))]);
            } else {
                setLoading(true);
                const { data } = await axios.get(countriesUrl, httpHeaders);
                setCountries([...data]);
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };

    useEffect(() => fetchCountries(), []);

    useEffect(() => filterRegion(), [region]);

    useEffect(() => filterCountry(), [query]);

    if(loading) return (<Loading />);

    return (
        <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
            <div className="container flex mx-auto my-16">
                <i className="fa fa-search my-auto -mr-9 z-10 pr-2 pl-3 py-5 rounded-md text-gray-400"></i>
                <input
                    type="text"
                    value={ query }
                    onChange={ event => setQuery(event.target.value) }
                    placeholder="Type in country name"
                    className="dark:bg-gray-700 pl-10 p-2 shadow-md rounded-md w-1/3"
                />
                <select onChange={ event => setRegion(event.target.value) } className="ml-auto my-2 p-2 shadow-md rounded-md font-medium bg-gray-700">
                    <option value="">Filter by region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>

            <Countries countries={ countries } />
        </div>
    );

};
