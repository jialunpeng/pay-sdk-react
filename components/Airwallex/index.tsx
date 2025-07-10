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

const AirwallexComponent = Airwallex as AirwallexComponentType;
AirwallexComponent.Button = AirwallexButton;
AirwallexComponent.Popup = AirwallexPopup;
AirwallexComponent.Modal = AirwallexModal;

export default AirwallexComponent;
