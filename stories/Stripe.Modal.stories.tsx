import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { STRIPE_MAP } from './common';
import Stripe from '../components/Stripe';

const metaModal: Meta<typeof Stripe.Modal> = {
  title: 'Components/Stripe/Modal',
  component: Stripe.Modal,
  tags: ['autodocs'],
};

export default metaModal;

type StoryModal = StoryObj<typeof Stripe.Modal>;

export const StripeModal: StoryModal = {
  args: {
    visible: false,
    stripeProps: STRIPE_MAP,
  },
};
