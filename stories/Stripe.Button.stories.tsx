import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { STRIPE_MAP } from './common';
import Stripe from '../components/Stripe';
import { StripeButtonRef } from '../components/Stripe/interface';

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

export const StripeButtonWithRef: StoryButton = {
  render: (args) => {
    const stripeButtonRef = React.useRef<StripeButtonRef>(null);

    return (
      <div>
        <Stripe.Button
          ref={stripeButtonRef}
          displayType="modal"
          onClick={() =>
            stripeButtonRef.current?.openModal({
              clientSecret: STRIPE_MAP.clientSecret,
              stripeKey: STRIPE_MAP.stripeKey,
            })
          }
          // stripeModalProps={{
          //   retryButtonProps: {
          //     onClick: () => {
          //       stripeButtonRef.current?.closeModal();
          //     },
          //   },
          //   finishButtonProps: {
          //     onClick: () => {
          //       stripeButtonRef.current?.closeModal();
          //     },
          //   },
          // }}
        >
          Ref Modal Stripe
        </Stripe.Button>
        <div style={{ marginTop: '16px' }}>
          <Stripe.Button
            ref={stripeButtonRef}
            displayType="popup"
            onClick={() =>
              stripeButtonRef.current?.openPopup({
                clientSecret: STRIPE_MAP.clientSecret,
                stripeKey: STRIPE_MAP.stripeKey,
              })
            }
          >
            Ref Popup Stripe
          </Stripe.Button>
        </div>
      </div>
    );
  },
  args: {},
};
