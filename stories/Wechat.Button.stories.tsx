import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import Wechat from '../components/Wechat';
import { WECHAT_URL } from './common';

const metaButton: Meta<typeof Wechat.Button> = {
  title: 'Components/Wechat/Button',
  component: Wechat.Button,
  tags: ['autodocs'],
};

export default metaButton;

type StoryButton = StoryObj<typeof Wechat.Button>;

export const WechatButton: StoryButton = {
  args: {
    modalProps: {
      wechatProps: {
        wechatType: 'qrcode',
        wechatUrl: WECHAT_URL,
      },
    },
  },
};

export const WechatButton_1: StoryButton = {
  args: {
    createOrder: async () => {
      return {
        wechatUrl: WECHAT_URL,
      };
    },
  },
};
