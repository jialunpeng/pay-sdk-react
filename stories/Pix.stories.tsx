import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import Pix from '../components/Pix';
import { PIX_CODE } from './common';

const metaButton: Meta<typeof Pix> = {
  title: 'Components/Pix/Form',
  component: Pix,
  tags: ['autodocs'],
};

export default metaButton;

type StoryForm = StoryObj<typeof Pix>;

export const PixForm: StoryForm = {
  args: {
    pixCode: PIX_CODE,
  },
};
