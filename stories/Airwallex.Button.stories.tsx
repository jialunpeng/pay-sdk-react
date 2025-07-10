import { Meta } from '@storybook/react';
import Airwallex from '../components/Airwallex';
import { StoryObj } from '@storybook/react';
import { PAYPAL_URL } from './common';

const metaButton: Meta<typeof Airwallex.Button> = {
  title: 'Components/Airwallex/Button',
  component: Airwallex.Button,
  tags: ['autodocs'],
};

export default metaButton;

type StoryButton = StoryObj<typeof Airwallex.Button>;

export const AirwallexH5: StoryButton = {
  args: {
    payMode: 'embedded',
    displayType: 'popup',
    createOrder: async () => {
      return {
        type: 'fullFeaturedCard',
        initOptions: {
          env: 'demo',
          locale: 'en',
        },
        options: {
          currency: 'USD',
          intent: {
            id: 'test_id',
            client_secret: 'test_client_secret',
          },
          client_secret: 'test_client_secret',
        },
        onSuccess: () => {
          // 支付成功后跳转的页面
          window.location.replace(PAYPAL_URL);
          // eslint-disable-next-line no-console
          console.log('success');
        },
        onError: () => {
          // eslint-disable-next-line no-console
          console.log('error');
        },
      };
    },
  },
};

export const AirwallexPc: StoryButton = {
  args: {
    payMode: 'embedded',
    displayType: 'modal',
    modalProps: {
      airwallexProps: {
        type: 'fullFeaturedCard',
        initOptions: {
          env: 'demo',
          locale: 'en',
        },
        options: {
          currency: 'USD',
          intent: {
            id: 'test_id',
            client_secret: 'test_client_secret',
          },
          client_secret: 'test_client_secret',
        },
        onSuccess: () => {
          // 支付成功后跳转的页面
          window.location.replace(PAYPAL_URL);
          // eslint-disable-next-line no-console
          console.log('success');
        },
        onError: () => {
          // eslint-disable-next-line no-console
          console.log('error');
        },
      },
    },
  },
};

export const AirwallexH5Redirect: StoryButton = {
  args: {
    payMode: 'redirect',
    createOrder: async () => {
      return {
        airwallexUrl: PAYPAL_URL,
      };
    },
  },
};

export const AirwallexPcRedirect: StoryButton = {
  args: {
    payMode: 'redirect',
    airwallexUrl: PAYPAL_URL,
  },
};
