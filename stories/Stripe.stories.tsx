import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { STRIPE_MAP } from './common';
import Stripe from '../components/Stripe';

const metaStripe: Meta<typeof Stripe> = {
  title: 'Components/Stripe/Form',
  component: Stripe,
  tags: ['autodocs'],
};

export default metaStripe;

type StoryStripe = StoryObj<typeof Stripe>;

export const StripeForm: StoryStripe = {
  args: {
    ...STRIPE_MAP,
  },
};
