import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { STRIPE_MAP } from './common';
import Stripe from '../components/Stripe';

const metaButton: Meta<typeof Stripe.Button> = {
  title: 'Components/Stripe/Button',
  component: Stripe.Button,
  tags: ['autodocs'],
};

export default metaButton;

type StoryButton = StoryObj<typeof Stripe.Button>;

export const StripeH5: StoryButton = {
  args: {
    createOrder: async () => {
      return STRIPE_MAP;
    },
  },
};

export const StripePc: StoryButton = {
  args: {
    stripePopupProps: {
      stripeProps: STRIPE_MAP,
    },
  },
};

export const StripePcModal: StoryButton = {
  args: {
    displayType: 'modal',
    stripeModalProps: {
      stripeProps: STRIPE_MAP,
    },
  },
};
