import { BrowserRouter } from 'react-router-dom';
import { Routes } from "./routes";
import { Navbar } from "./components/navbar";

function App() {

  return (
    <BrowserRouter>
        <div className="container mx-auto">
            <div className="shadow-md px-3 py-6 bg-white dark:bg-gray-700 dark:text-white">
                <div className="container flex mx-auto">
                    <h1 className="font-bold text-xl">Where in the world?</h1>
                    <Navbar />
                </div>
            </div>
            <Routes />
        </div>
    </BrowserRouter>
  );
}

export default App;
