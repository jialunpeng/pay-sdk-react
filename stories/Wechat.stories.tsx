import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import Wechat from '../components/Wechat';
import { WECHAT_URL } from './common';

const metaButton: Meta<typeof Wechat> = {
  title: 'Components/Wechat/Form',
  component: Wechat,
  tags: ['autodocs'],
};

export default metaButton;

type StoryForm = StoryObj<typeof Wechat>;

export const WechatForm: StoryForm = {
  args: {
    wechatUrl: WECHAT_URL,
  },
};
