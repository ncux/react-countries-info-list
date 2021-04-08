import { useRoutes } from "react-router-dom";
import { Countries } from "./components/countries";
import { Country } from "./components/country";
import NotFound from "./components/404";

export const Routes = () => {

    return useRoutes([

        {
            path: 'countries',
            element: <Countries />
        },
        {
            path: 'country',
            element: <Country />
        },
        {
            path: '',
            redirectTo: 'countries',
            element: <Countries />
        },
        {
            path: '*',
            element: <NotFound />
        }

    ]);

};
