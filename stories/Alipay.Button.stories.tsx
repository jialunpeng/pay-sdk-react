import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ALIPAY_FORM_HTML } from './common';
import Alipay from '../components/Alipay';
import { AlipayButtonRef } from '../components/Alipay/interface';

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

export const AlipayButtonWithRef: StoryButton = {
  render: (args) => {
    const alipayButtonRef = React.useRef<AlipayButtonRef>(null);

    return (
      <div>
        <Alipay.Button
          ref={alipayButtonRef}
          onClick={() =>
            alipayButtonRef.current?.openModal({
              formHtml: ALIPAY_FORM_HTML,
              tipText: '通过 ref 打开的弹窗',
            })
          }
          modalProps={{
            retryButtonProps: {
              onClick: () => {
                alipayButtonRef.current?.closeModal();
              },
            },
            finishButtonProps: {
              onClick: () => {
                alipayButtonRef.current?.closeModal();
              },
            },
          }}
        />
      </div>
    );
  },
  args: {
    createOrder: async () => {
      return {
        formHtml: ALIPAY_FORM_HTML,
      };
    },
  },
};
