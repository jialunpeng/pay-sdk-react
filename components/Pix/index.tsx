import Pix from './pix';
import PixButton from './pix-button';
import PixModal from './pix-modal';

type PixComponentType = typeof Pix & {
  Button: typeof PixButton;
  Modal: typeof PixModal;
};

const PixComponent = Object.assign({}, Pix, {
  Button: PixButton,
  Modal: PixModal,
}) as PixComponentType;

export * from './interface';

export default PixComponent;

export { PixButton, PixModal };
