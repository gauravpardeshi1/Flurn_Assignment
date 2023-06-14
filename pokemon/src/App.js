import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import AllRoutes from './component/AllRoutes';
import { useSelector } from 'react-redux';

function App() {
  
  return (
    <div className="App">

      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
