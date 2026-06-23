import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom';
import PhoneFrame from './components/PhoneFrame';
import { AppProvider } from './context/AppContext';
import AppRedirect from './pages/AppRedirect';
import Home from './pages/Home';
import Landing from './pages/Landing';
import NationalitySelect from './pages/NationalitySelect';
import RewardDetail from './pages/RewardDetail';
import Rewards from './pages/Rewards';
import VerifyPhone from './pages/VerifyPhone';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <PhoneFrame>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/verify" element={<VerifyPhone />} />
            <Route path="/redirect" element={<AppRedirect />} />
            <Route path="/home" element={<Home />} />
            <Route path="/nationality" element={<NationalitySelect />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/rewards/:id" element={<RewardDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </PhoneFrame>
      </BrowserRouter>
    </AppProvider>
  );
}
