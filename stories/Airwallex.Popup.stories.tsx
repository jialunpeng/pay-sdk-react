import { Meta } from '@storybook/react';
import Airwallex from '../components/Airwallex';
import { StoryObj } from '@storybook/react';
import { PAYPAL_URL } from './common';

const metaPopup: Meta<typeof Airwallex.Popup> = {
  title: 'Components/Airwallex/Popup',
  component: Airwallex.Popup,
  tags: ['autodocs'],
};

export default metaPopup;

type StoryPopup = StoryObj<typeof Airwallex.Popup>;

export const AirwallexH5Popup: StoryPopup = {
  args: {
    visible: false,
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
};
