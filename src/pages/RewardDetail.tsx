import { useNavigate, useParams } from 'react-router-dom';
import RewardCard from '../components/RewardCard';
import { OFFERS } from '../utils/offers';

export default function RewardDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const offer = OFFERS.find((o) => o.id === id);

  if (!offer) {
    return (
      <div className="flex min-h-full flex-col items-center justify-center bg-white px-6 text-center">
        <p className="text-[14px] text-text-secondary">We couldn&apos;t find that offer.</p>
        <button onClick={() => navigate('/rewards')} className="mt-4 text-[14px] font-semibold text-brand-cta-blue">
          Back to Exclusive Offers
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">
      <div className="absolute inset-x-0 bottom-0 flex max-h-[90%] w-full max-w-mobile flex-col overflow-y-auto rounded-t-3xl bg-white">
        <button
          onClick={() => navigate('/rewards')}
          className="mx-auto mt-3 h-1 w-10 rounded-full bg-surface-border"
          aria-label="Close"
        />
        <RewardCard offer={offer} />
      </div>
    </div>
  );
}
