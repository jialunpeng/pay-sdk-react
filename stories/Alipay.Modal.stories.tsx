import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { ALIPAY_FORM_HTML } from './common';
import Alipay from '../components/Alipay';

const metaButton: Meta<typeof Alipay.Modal> = {
  title: 'Components/Alipay/Modal',
  component: Alipay.Modal,
  tags: ['autodocs'],
};

export default metaButton;

type StoryButton = StoryObj<typeof Alipay.Modal>;

export const AlipayModal: StoryButton = {
  args: {
    visible: false,
    alipayProps: {
      formHtml: ALIPAY_FORM_HTML,
    },
  },
};
