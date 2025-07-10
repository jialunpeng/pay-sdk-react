import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { PAYSSION_URL } from './common';
import { PayssionButton } from '../components/Payssion';

const metaButton: Meta<typeof PayssionButton> = {
  title: 'Components/Payssion/Button',
  component: PayssionButton,
  tags: ['autodocs'],
};

export default metaButton;

type StoryButton = StoryObj<typeof PayssionButton>;

export const PayssionH5: StoryButton = {
  args: {
    createOrder: async () => {
      return {
        payssionUrl: PAYSSION_URL,
      };
    },
  },
};

export const PayssionPc: StoryButton = {
  args: {
    payssionUrl: PAYSSION_URL,
  },
};
