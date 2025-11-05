import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { PAYPAL_URL } from './common';
import { PaypalButton } from '../components/Paypal';
import React, { useEffect } from 'react'; // Added missing import for React

const metaButton: Meta<typeof PaypalButton> = {
  title: 'Components/Paypal/Button',
  component: PaypalButton,
  tags: ['autodocs'],
};

export default metaButton;

type StoryButton = StoryObj<typeof PaypalButton>;

export const PaypalH5: StoryButton = {
  args: {
    createOrder: async () => {
      return {
        paypalUrl: PAYPAL_URL,
      };
    },
  },
};

export const PaypalPc: StoryButton = {
  args: {
    paypalUrl: PAYPAL_URL,
  },
};

export const PaypalWithPolling: StoryButton = {
  args: {
    createOrder: async () => {
      return {
        paypalUrl: PAYPAL_URL,
      };
    },
    isPayment: false, // 初始状态为未支付
    closeWindowOnUnmount: false,
  },
};

// 业务场景示例：通过外部状态控制支付流程
export const PaypalBusinessExample: StoryButton = {
  render: (args) => {
    const [paymentStatus, setPaymentStatus] = React.useState(false);

    console.log(paymentStatus, 'paymentStatus');

    const handleCreateOrder = async () => {
      console.log('创建订单...');
      // 模拟创建订单
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('订单创建成功');
      return { paypalUrl: PAYPAL_URL };
    };

    useEffect(() => {
      // 模拟支付完成后的业务逻辑
      setTimeout(() => {
        console.log('模拟支付完成...');
        setPaymentStatus(true);
      }, 5000);
    }, []);

    return (
      <PaypalButton
        {...args}
        createOrder={handleCreateOrder}
        isPayment={paymentStatus}
      />
    );
  },
  args: {
    closeWindowOnUnmount: false,
  },
};
