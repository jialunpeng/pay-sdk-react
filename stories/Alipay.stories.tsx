import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { ALIPAY_FORM_HTML } from './common';
import Alipay from '../components/Alipay';

const metaButton: Meta<typeof Alipay> = {
  title: 'Components/Alipay/Form',
  component: Alipay,
  tags: ['autodocs'],
};

export default metaButton;

type StoryButton = StoryObj<typeof Alipay>;

export const AlipayForm: StoryButton = {
  args: {
    formHtml: ALIPAY_FORM_HTML,
  },
};
