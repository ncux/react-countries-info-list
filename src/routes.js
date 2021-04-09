import { useRoutes } from "react-router-dom";
import { Home } from "./components/home";
import { Country } from "./components/country";
import NotFound from "./components/404";
import {CountryDetails} from "./components/country-details";

export const Routes = () => {

    return useRoutes([

        {
            path: 'countries',
            element: <Home />
        },
        {
            path: 'country',
            element: <Country />
        },
        {
            path: '',
            redirectTo: 'countries',
            element: <Home />
        },
        {
            path: 'details/:countryName',
            element: <CountryDetails />
        },
        {
            path: '*',
            element: <NotFound />
        }

    ]);

};
