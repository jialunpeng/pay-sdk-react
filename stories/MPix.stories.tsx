import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { PIX_CODE } from './common';
import { MPixButton } from '../components/MPix';

const metaButton: Meta<typeof MPixButton> = {
  title: 'Components/MPix/Button',
  component: MPixButton,
  tags: ['autodocs'],
};

export default metaButton;

type StoryButton = StoryObj<typeof MPixButton>;

export const MPixModal: StoryButton = {
  args: {
    displayType: 'modal',
    createOrder: async () => {
      return {
        pixCode: PIX_CODE,
      };
    },
  },
};

export const MPixMask: StoryButton = {
  args: {
    displayType: 'mask',
    createOrder: async () => {
      return {
        pixCode: PIX_CODE,
      };
    },
  },
};

export const MPixModal_1: StoryButton = {
  args: {
    pixCode: PIX_CODE,
  },
};

export const MPixMask_1: StoryButton = {
  args: {
    pixCode: PIX_CODE,
    displayType: 'mask',
  },
};
