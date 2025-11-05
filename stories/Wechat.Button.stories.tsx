import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Wechat from '../components/Wechat';
import { WechatButtonRef } from '../components/Wechat/interface';
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
  render: (args) => {
    return (
      <Wechat.Button
        {...args}
        modalProps={{
          ...args.modalProps,
        }}
      />
    );
  },
  args: {
    createOrder: async () => {
      return {
        wechatUrl: WECHAT_URL,
      };
    },
  },
};

export const WechatButtonWithRef: StoryButton = {
  render: (args) => {
    const wechatButtonRef = React.useRef<WechatButtonRef>(null);

    return (
      <Wechat.Button
        ref={wechatButtonRef}
        {...args}
        onClick={() =>
          wechatButtonRef.current?.openModal({
            wechatUrl: WECHAT_URL,
            wechatType: 'qrcode',
            tipText: '通过 ref 打开的弹窗',
          })
        }
        modalProps={{
          ...args.modalProps,
          retryButtonProps: {
            onClick: () => {
              wechatButtonRef.current?.closeModal();
            },
          },
          finishButtonProps: {
            onClick: () => {
              wechatButtonRef.current?.closeModal();
            },
          },
        }}
      />
    );
  },
  args: {
    createOrder: async () => {
      return {
        wechatUrl: WECHAT_URL,
      };
    },
  },
};
