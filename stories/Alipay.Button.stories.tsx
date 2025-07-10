import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { ALIPAY_FORM_HTML } from './common';
import Alipay from '../components/Alipay';

const metaButton: Meta<typeof Alipay.Button> = {
  title: 'Components/Alipay/Button',
  component: Alipay.Button,
  tags: ['autodocs'],
};

export default metaButton;

type StoryButton = StoryObj<typeof Alipay.Button>;

export const AlipayPc: StoryButton = {
  args: {
    createOrder: async () => {
      return {
        formHtml: ALIPAY_FORM_HTML,
      };
    },
  },
};

export const AlipayPc_1: StoryButton = {
  args: {
    modalProps: {
      alipayProps: {
        formHtml: ALIPAY_FORM_HTML,
      },
    },
  },
};
