import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import Wechat from '../components/Wechat';
import { WECHAT_URL } from './common';

const metaButton: Meta<typeof Wechat.Modal> = {
  title: 'Components/Wechat/Modal',
  component: Wechat.Modal,
  tags: ['autodocs'],
};

export default metaButton;

type StoryModal = StoryObj<typeof Wechat.Modal>;

export const WechatModal: StoryModal = {
  args: {
    visible: false,
    wechatProps: {
      wechatUrl: WECHAT_URL,
    },
  },
};
