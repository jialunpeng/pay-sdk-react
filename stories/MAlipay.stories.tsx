import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { ALIPAY_FORM_HTML_H5 } from './common';
import MAlipay from '../components/MAlipay';

const metaButton: Meta<typeof MAlipay.Button> = {
  title: 'Components/MAlipay/Button',
  component: MAlipay.Button,
  tags: ['autodocs'],
};

export default metaButton;

type StoryButton = StoryObj<typeof MAlipay.Button>;

export const MAlipayH5: StoryButton = {
  args: {
    displayType: 'mask',
    createOrder: async () => {
      return {
        formHtml: ALIPAY_FORM_HTML_H5,
      };
    },
  },
};

export const MAlipayH5_1: StoryButton = {
  args: {
    formHtml: ALIPAY_FORM_HTML_H5,
  },
};
