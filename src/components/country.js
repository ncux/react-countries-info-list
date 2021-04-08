import { Link } from "react-router-dom";


export const Country = ({ country }) => {

    const { alpha2Code } = country;

    return (
        <Link to={{ pathname: `/details/${country}`, state: country }}>
            conlcllc

        </Link>
    );

};
