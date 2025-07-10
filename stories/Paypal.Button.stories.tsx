import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { PAYPAL_URL } from './common';
import { PaypalButton } from '../components/Paypal';

const metaButton: Meta<typeof PaypalButton> = {
  title: 'Components/Paypal/Button',
  component: PaypalButton,
  tags: ['autodocs'],
};

export default metaButton;

type StoryButton = StoryObj<typeof PaypalButton>;

export const PaypalH5: StoryButton = {
  args: {
    createOrder: async () => {
      return {
        paypalUrl: PAYPAL_URL,
      };
    },
  },
};

export const PaypalPc: StoryButton = {
  args: {
    paypalUrl: PAYPAL_URL,
  },
};
