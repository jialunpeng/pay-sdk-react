import { Meta } from '@storybook/react';
import Airwallex from '../components/Airwallex';
import { StoryObj } from '@storybook/react';
import {
  AIRWALLEX_APPLE_PAY_BUTTON_OPTIONS,
  AIRWALLEX_DROP_IN_OPTIONS,
  AIRWALLEX_FULL_FEATURED_CARD_OPTIONS,
  PAYPAL_URL,
} from './common';

const metaAirwallex: Meta<typeof Airwallex> = {
  title: 'Components/Airwallex/Airwallex',
  component: Airwallex,
  tags: ['autodocs'],
};

export default metaAirwallex;

type StoryAirwallex = StoryObj<typeof Airwallex>;

export const AirwallexForm: StoryAirwallex = {
  args: {
    ...AIRWALLEX_DROP_IN_OPTIONS,
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
};
