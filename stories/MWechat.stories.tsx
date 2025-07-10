import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { WECHAT_URL_H5 } from './common';
import { MWechatButton } from '../components/MWeChat';

const metaButton: Meta<typeof MWechatButton> = {
  title: 'Components/MWechat/Button',
  component: MWechatButton,
  tags: ['autodocs'],
};

export default metaButton;

type StoryButton = StoryObj<typeof MWechatButton>;

export const MWechatH5: StoryButton = {
  args: {
    displayType: 'mask',
    createOrder: async () => {
      return {
        wechatUrl: WECHAT_URL_H5,
      };
    },
  },
};

export const MWechatH5_1: StoryButton = {
  args: {
    wechatUrl: WECHAT_URL_H5,
  },
};
