import Airwallex from './airwallex';
import AirwallexPopup from './airwallex-popup';
import AirwallexButton from './airwallex-button';
import AirwallexModal from './airwallex-modal';

export * from './interface';

type AirwallexComponentType = typeof Airwallex & {
  Button: typeof AirwallexButton;
  Popup: typeof AirwallexPopup;
  Modal: typeof AirwallexModal;
};

const AirwallexComponent = Object.assign({}, Airwallex, {
  Button: AirwallexButton,
  Popup: AirwallexPopup,
  Modal: AirwallexModal,
}) as AirwallexComponentType;

export default AirwallexComponent;

export { AirwallexButton, AirwallexPopup, AirwallexModal };
