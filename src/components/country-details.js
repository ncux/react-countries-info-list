import { useLocation, useNavigate } from "react-router-dom";

export const CountryDetails = () => {

    const { state } = useLocation();

    const navigate = useNavigate();

    return (
        <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
            <div className="w-screen shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
                <div className="container flex mx-auto">
                    <h1 className=""></h1>
                </div>
            </div>
            <div className="container mx-auto mb-16">
                <button onClick={ () => navigate(`/`) } className="px-8 py-2 bg-white text-gray-600 shadow-md rounded-lg dark:bg-gray-700 dark:text-white">
                    <i className="fa fa-arrow-left"></i> Back
                </button>
            </div>
            <div className="container flex mx-auto p-8 pl-0 pr-0">
               <img src={ state?.flag } alt={`Flag of ${state?.name}`} className="w-1/2 pr-8" />
                <div className="p-8 pl-0">
                    <h2 className="font-bold text-2xl mb-8">{ state.name }</h2>
                    <div className="grid grid-cols-2 gap-x-20 gap-y-4">
                        <p>Native name: <span className="dark:text-gray-400 text-gray-700 text-sm"> { state?.nativeName }</span></p>
                        <p>Population: <span className="dark:text-gray-400 text-gray-700 text-sm"> { state?.population }</span></p>
                        <p>Region: <span className="dark:text-gray-400 text-gray-700 text-sm"> { state?.region }</span></p>
                        <p>Top Level Domain<span className="dark:text-gray-400 text-gray-700 text-sm"> { state?.topLevelDomain[0] }</span></p>
                    </div>
                </div>
            </div>
        </div>
    );

};
