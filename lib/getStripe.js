import { loadStripe } from '@stripe/stripe-js/pure';

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    loadStripe.setLoadParameters({ advancedFraudSignals: false });
    stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);
  }

  return stripePromise;
}

export default getStripe;
