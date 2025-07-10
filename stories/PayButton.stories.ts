// stories/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { PaymentMethod } from '../components/shared';
import PayButton from '../components/PayButton';
import {
  ALIPAY_FORM_HTML,
  ALIPAY_FORM_HTML_H5,
  PAYPAL_URL,
  PAYSSION_URL,
  STRIPE_MAP,
  WECHAT_URL,
  WECHAT_URL_H5,
} from './common';

const meta: Meta<typeof PayButton> = {
  title: 'Components/PayButton',
  component: PayButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PayButton>;

export const PaypalH5: Story = {
  args: {
    payMethod: PaymentMethod.PaypalH5,
    paypalUrl: PAYPAL_URL,
  },
};

export const PaypalPc: Story = {
  args: {
    payMethod: PaymentMethod.PaypalPc,
    createOrder: async () => {
      return {
        paypalUrl: PAYPAL_URL,
      };
    },
  },
};

export const StripeH5: Story = {
  args: {
    payMethod: PaymentMethod.StripeH5,
    createOrder: async () => {
      return {
        clientSecret: STRIPE_MAP.clientSecret,
        stripeKey: STRIPE_MAP.stripeKey,
      };
    },
  },
};

export const StripePc: Story = {
  args: {
    payMethod: PaymentMethod.StripePc,
    displayType: 'modal',
    stripeModalProps: {
      stripeProps: {
        clientSecret: STRIPE_MAP.clientSecret,
        stripeKey: STRIPE_MAP.stripeKey,
      },
    },
  },
};

export const AirwallexEmbedded: Story = {
  args: {
    payMethod: PaymentMethod.Airwallex,
    displayType: 'popup',
    payMode: 'embedded',
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

export const AirwallexRedirect: Story = {
  args: {
    payMethod: PaymentMethod.Airwallex,
    payMode: 'redirect',
    // airwallexUrl: PAYPAL_URL,
    createOrder: async () => {
      return {
        airwallexUrl: PAYPAL_URL,
      };
    },
  },
};

export const PayssionH5: Story = {
  args: {
    payMethod: PaymentMethod.Payssion,
    createOrder: async () => {
      return {
        payssionUrl: PAYSSION_URL,
      };
    },
  },
};

export const PayssionPc: Story = {
  args: {
    payMethod: PaymentMethod.Payssion,
    payssionUrl: PAYSSION_URL,
  },
};

export const AlipayH5: Story = {
  args: {
    payMethod: PaymentMethod.AlipayH5,
    createOrder: async () => {
      return {
        formHtml: ALIPAY_FORM_HTML_H5,
      };
    },
  },
};

export const AlipayH5_1: Story = {
  args: {
    payMethod: PaymentMethod.AlipayH5,
    formHtml: ALIPAY_FORM_HTML_H5,
  },
};

export const WechatH5: Story = {
  args: {
    payMethod: PaymentMethod.WechatH5,
    createOrder: async () => {
      return {
        wechatUrl: WECHAT_URL_H5,
      };
    },
  },
};

export const WechatH5_1: Story = {
  args: {
    payMethod: PaymentMethod.WechatH5,
    wechatUrl: WECHAT_URL_H5,
  },
};

export const WechatH5_2: Story = {
  args: {
    payMethod: PaymentMethod.WechatH5,
    wechatUrl: WECHAT_URL_H5,
    displayType: 'mask',
  },
};

export const AlipayPc: Story = {
  args: {
    payMethod: PaymentMethod.AlipayPc,
    modalProps: {
      alipayProps: {
        formHtml: ALIPAY_FORM_HTML,
      },
    },
  },
};

export const AlipayPc_1: Story = {
  args: {
    payMethod: PaymentMethod.AlipayPc,
    createOrder: async () => {
      return {
        formHtml: ALIPAY_FORM_HTML,
      };
    },
  },
};

export const WechatPc: Story = {
  args: {
    payMethod: PaymentMethod.WechatPc,
    modalProps: {
      wechatProps: {
        wechatUrl: WECHAT_URL,
      },
    },
  },
};

export const WechatPc_1: Story = {
  args: {
    payMethod: PaymentMethod.WechatPc,
    createOrder: async () => {
      return {
        wechatUrl: WECHAT_URL,
      };
    },
  },
};
