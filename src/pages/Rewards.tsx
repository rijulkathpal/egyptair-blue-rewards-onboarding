import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import OfferCard from '../components/OfferCard';
import StatusBar from '../components/StatusBar';
import { OFFERS } from '../utils/offers';

export default function Rewards() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () => OFFERS.filter((o) => o.brand.toLowerCase().includes(query.trim().toLowerCase())),
    [query]
  );

  return (
    <div className="flex min-h-full flex-col bg-white">
      <StatusBar tone="dark" />
      <Header variant="page" title="Exclusive Offers" onBack={() => navigate('/home')} />

      <div className="px-5 pb-3">
        <div className="flex items-center gap-2 rounded-2xl bg-surface-subtle px-4 py-3">
          <Search size={18} className="text-text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, brands & offers"
            className="w-full bg-transparent text-[14px] text-brand-ink placeholder:text-text-muted outline-none"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-6">
        {filtered.map((offer) => (
          <OfferCard key={offer.id} offer={offer} onClick={() => navigate(`/rewards/${offer.id}`)} />
        ))}
      </div>
    </div>
  );
}
