import './App.css';
import SortingChart from "./components/SortingChart";
import SortingProvider from "./contexts/SortingContext";

function App() {
    return (

        <div className="w-100vw h-100vh mt-4 mb-4 flex flex-col items-center bg-gradient-to-r from-gray-900 via-gray-850 via-gray-750 to-gray-700">
<SortingProvider>
            <div className="container mx-auto px-4">
                <SortingChart />
            </div>
        </SortingProvider>
        
        </div>
    );
}

export default App;