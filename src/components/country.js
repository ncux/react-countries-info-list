
export const Country = ({ country }) => {

    const { alpha2Code, capital, name, nativeName, flag, population, region  } = country;

    return (
        <div className="container rounded shadow-lg bg-white dark:bg-gray-700 dark:text-white pb-4">
            <img src={ flag } alt={`Flag of ${name}`} className="h-1/2 w-full rounded-tl-lg rounded-tr-lg"/>
            <div className="p-4">
                <h3 className="font-bold mb-1">{ name } | <span className="ml-auto">{ alpha2Code }</span></h3>
                <h5 className="mb-4">{ nativeName }</h5>
                <p className="text-xs">Population:
                    <span className="text-gray-700 dark:text-gray-500"> { population }</span>
                </p>
                <p className="text-xs">Region:
                    <span className="text-gray-700 dark:text-gray-500"> { region }</span>
                </p>
                <p className="text-xs">Capital:
                    <span className="text-gray-700 dark:text-gray-500"> { capital }</span>
                </p>
            </div>

        </div>
    );

};
