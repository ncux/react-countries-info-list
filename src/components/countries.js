import { useNavigate } from "react-router-dom";
import { Country } from "./country";
import Loading from "./loading/loading";

export const Countries = ({ countries }) => {

    const navigate = useNavigate();

    return (
        <div className="container grid grid-cols-4 gap-16 mx-auto">
            {
                countries?.length > 0 ? (
                    countries.map((country, i) => {
                        return (
                            <div key={country?.alpha2Code} onClick={ () => navigate(`/details/${country.name}`, { state: country }) }>
                                <Country country={ country } />
                            </div>
                        );
                    })

                ) : (<Loading />)
            }
        </div>
    );

};
