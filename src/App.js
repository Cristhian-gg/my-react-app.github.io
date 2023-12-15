import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './assets/components/HomePage';
import AdaPage from './assets/components/AdaPage';
import AlanPage from './assets/components/AlanPage';
import BillPage from './assets/components/BillPage';
import DennisPage from './assets/components/DennisPage';
import GuidoPage from './assets/components/GuidoPage';
import LarryPage from './assets/components/LarryPage';
import LinusPage from './assets/components/LinusPage';
import TimPage from './assets/components/TimPage';
import CreditosPage from './assets/components/CreditosPage';


function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/ada" element={<AdaPage />} />
        <Route path="/alan" element={<AlanPage />}/>
        <Route path="/bill" element={<BillPage />}/>
        <Route path="/dennis" element={<DennisPage />}/>
        <Route path="/guido" element={<GuidoPage />}/>
        <Route path="/Larry" element={<LarryPage />}/>
        <Route path="/linus" element={<LinusPage />}/>
        <Route path="/tim" element={<TimPage />}/>
        <Route path="/creditos" element={<CreditosPage />}/>
      </Routes>
    </div>
  );
}

export default App;