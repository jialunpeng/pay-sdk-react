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

const StripeComponent = Object.assign({}, Stripe, {
  Button: StripeButton,
  Popup: StripePopup,
  Modal: StripeModal,
}) as StripeComponentType;

export default StripeComponent;

export { StripeButton, StripePopup, StripeModal };
