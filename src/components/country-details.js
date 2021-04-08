import { Link } from "react-router-dom";


export const CountryDetails = ({ country }) => {

    const { alpha2Code } = country;

    return (
        <Link to={`/details/${country}`}>
            conlcllc

        </Link>
    );

};
