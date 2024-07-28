import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import FacilityGrid from './components/facility/FacilityGrid';

function App() {
  return (
    <Routes>
        <Route path= "/login" Component={LoginPage} />
        <Route path="/facility" Component={FacilityGrid} />
    </Routes>
  );
}

export default App;
