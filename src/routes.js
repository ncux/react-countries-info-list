import { useRoutes } from "react-router-dom";
import { Home } from "./components/home";
import { Country } from "./components/country";
import NotFound from "./components/404";

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
            redirectTo: 'countries',
            element: <Home />
        },
        {
            path: '*',
            element: <NotFound />
        }

    ]);

};
