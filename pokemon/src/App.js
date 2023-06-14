import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import AllRoutes from './component/AllRoutes';
import { useSelector } from 'react-redux';
import PokemonList from './pokemon/PokemonList';
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>


      <div className="App">

        <Navbar />
        <AllRoutes />



      </div>
    </QueryClientProvider>
  );
}

export default App;
