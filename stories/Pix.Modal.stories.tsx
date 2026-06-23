import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import Pix from '../components/Pix';
import { PIX_CODE } from './common';

const metaButton: Meta<typeof Pix.Modal> = {
  title: 'Components/Pix/Modal',
  component: Pix.Modal,
  tags: ['autodocs'],
};

export default metaButton;

type StoryModal = StoryObj<typeof Pix.Modal>;

export const PixModal: StoryModal = {
  args: {
    visible: false,
    pixProps: {
      pixCode: PIX_CODE,
    },
  },
};
