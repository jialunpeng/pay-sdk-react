import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { STRIPE_MAP } from './common';
import Stripe from '../components/Stripe';

const metaPopup: Meta<typeof Stripe.Popup> = {
  title: 'Components/Stripe/Popup',
  component: Stripe.Popup,
  tags: ['autodocs'],
};

export default metaPopup;

type StoryPopup = StoryObj<typeof Stripe.Popup>;

export const StripePopup: StoryPopup = {
  args: {
    visible: false,
    stripeProps: STRIPE_MAP,
  },
};
