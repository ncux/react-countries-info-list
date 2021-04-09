import Loading from "./loading/loading";
import { Link } from "react-router-dom";
import { Country } from "./country";


export const Countries = ({ countries }) => {

    return (
        <div className="container grid grid-cols-4 gap-16 mx-auto">
            {
                countries?.length > 0 ? (
                    countries.map((country, i) => {
                        return (
                            <Link key={country?.alpha2Code} to={{ pathname: `/details/${country.name}`, state: country }}>
                                <Country country={ country } />
                            </Link>
                        );
                    })

                ) : (<Loading />)
            }
        </div>
    );

};
