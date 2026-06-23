import { useNavigate } from 'react-router-dom';
import CountrySelector from '../components/CountrySelector';
import { useAppContext } from '../context/useAppContext';

export default function NationalitySelect() {
  const navigate = useNavigate();
  const { nationality, setNationality } = useAppContext();

  return (
    <CountrySelector
      title="Nationality"
      selectedIso2={nationality?.iso2}
      confirmLabel="Confirm"
      onSelect={(country) => {
        setNationality(country);
        navigate('/rewards');
      }}
      onClose={() => navigate('/home')}
    />
  );
}
