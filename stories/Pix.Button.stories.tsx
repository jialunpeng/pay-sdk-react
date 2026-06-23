import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Pix from '../components/Pix';
import { PixButtonRef } from '../components/Pix/interface';
import { PIX_CODE } from './common';

const metaButton: Meta<typeof Pix.Button> = {
  title: 'Components/Pix/Button',
  component: Pix.Button,
  tags: ['autodocs'],
};

export default metaButton;

type StoryButton = StoryObj<typeof Pix.Button>;

export const PixButton: StoryButton = {
  args: {
    modalProps: {
      pixProps: {
        pixCode: PIX_CODE,
      },
    },
  },
};

export const PixButton_1: StoryButton = {
  render: (args) => {
    return (
      <Pix.Button
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
        pixCode: PIX_CODE,
      };
    },
  },
};

const PixButtonWithRefRenderer: React.FC = () => {
  const pixButtonRef = React.useRef<PixButtonRef>(null);

  return (
    <Pix.Button
      ref={pixButtonRef}
      createOrder={async () => {
        return {
          pixCode: PIX_CODE,
        };
      }}
      onClick={() =>
        pixButtonRef.current?.openModal({
          pixCode: PIX_CODE,
          tipText: '通过 ref 打开的弹窗',
        })
      }
      modalProps={{
        retryButtonProps: {
          onClick: () => {
            pixButtonRef.current?.closeModal();
          },
        },
        finishButtonProps: {
          onClick: () => {
            pixButtonRef.current?.closeModal();
          },
        },
      }}
    />
  );
};

export const PixButtonWithRef: StoryButton = {
  render: () => <PixButtonWithRefRenderer />,
};
