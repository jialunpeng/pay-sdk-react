import Stripe from './stripe';
import StripePopup from './stripe-popup';
import StripeButton from './stripe-button';
import StripeModal from './stripe-modal';

export * from './interface';

type StripeComponentType = typeof Stripe & {
  Button: typeof StripeButton;
  Popup: typeof StripePopup;
  Modal: typeof StripeModal;
};

const StripeComponent = Stripe as StripeComponentType;
StripeComponent.Button = StripeButton;
StripeComponent.Popup = StripePopup;
StripeComponent.Modal = StripeModal;

export default StripeComponent;
