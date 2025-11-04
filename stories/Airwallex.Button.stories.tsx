import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Airwallex from '../components/Airwallex';
import { AirwallexButtonRef } from '../components/Airwallex/interface';
import { PAYPAL_URL } from './common';

const metaButton: Meta<typeof Airwallex.Button> = {
  title: 'Components/Airwallex/Button',
  component: Airwallex.Button,
  tags: ['autodocs'],
};

export default metaButton;

type StoryButton = StoryObj<typeof Airwallex.Button>;

export const AirwallexH5: StoryButton = {
  args: {
    payMode: 'embedded',
    displayType: 'popup',
    createOrder: async () => {
      return {
        type: 'fullFeaturedCard',
        initOptions: {
          env: 'demo',
          locale: 'en',
        },
        options: {
          currency: 'USD',
          intent: {
            id: 'test_id',
            client_secret: 'test_client_secret',
          },
          client_secret: 'test_client_secret',
        },
        onSuccess: () => {
          // 支付成功后跳转的页面
          window.location.replace(PAYPAL_URL);
          // eslint-disable-next-line no-console
          console.log('success');
        },
        onError: () => {
          // eslint-disable-next-line no-console
          console.log('error');
        },
      };
    },
  },
};

export const AirwallexPc: StoryButton = {
  args: {
    payMode: 'embedded',
    displayType: 'modal',
    modalProps: {
      airwallexProps: {
        type: 'fullFeaturedCard',
        initOptions: {
          env: 'demo',
          locale: 'en',
        },
        options: {
          currency: 'USD',
          intent: {
            id: 'test_id',
            client_secret: 'test_client_secret',
          },
          client_secret: 'test_client_secret',
        },
        onSuccess: () => {
          // 支付成功后跳转的页面
          window.location.replace(PAYPAL_URL);
          // eslint-disable-next-line no-console
          console.log('success');
        },
        onError: () => {
          // eslint-disable-next-line no-console
          console.log('error');
        },
      },
    },
  },
};

export const AirwallexH5Redirect: StoryButton = {
  args: {
    payMode: 'redirect',
    createOrder: async () => {
      return {
        airwallexUrl: PAYPAL_URL,
      };
    },
  },
};

export const AirwallexPcRedirect: StoryButton = {
  args: {
    payMode: 'redirect',
    airwallexUrl: PAYPAL_URL,
  },
};

export const AirwallexButtonWithRef: StoryButton = {
  render: (args) => {
    const airwallexButtonRef = React.useRef<AirwallexButtonRef>(null);

    return (
      <div>
        <Airwallex.Button
          ref={airwallexButtonRef}
          payMode="embedded"
          displayType="modal"
          onClick={() =>
            airwallexButtonRef.current?.openModal({
              type: 'fullFeaturedCard',
              initOptions: {
                env: 'demo',
                locale: 'en',
              },
              options: {
                currency: 'USD',
                intent: {
                  id: 'test_id',
                  client_secret: 'test_client_secret',
                },
                client_secret: 'test_client_secret',
              },
              onSuccess: () => {
                console.log('Modal 支付成功');
              },
              onError: () => {
                console.log('Modal 支付失败');
              },
            })
          }
          modalProps={{
            retryButtonProps: {
              onClick: () => {
                airwallexButtonRef.current?.closeModal();
              },
            },
            finishButtonProps: {
              onClick: () => {
                airwallexButtonRef.current?.closeModal();
              },
            },
          }}
        >
          Ref Modal Airwallex
        </Airwallex.Button>
        <div style={{ marginTop: '16px' }}>
          <Airwallex.Button
            ref={airwallexButtonRef}
            payMode="embedded"
            displayType="popup"
            onClick={() =>
              airwallexButtonRef.current?.openPopup({
                type: 'fullFeaturedCard',
                initOptions: {
                  env: 'demo',
                  locale: 'en',
                },
                options: {
                  currency: 'USD',
                  intent: {
                    id: 'test_id',
                    client_secret: 'test_client_secret',
                  },
                  client_secret: 'test_client_secret',
                },
                onSuccess: () => {
                  console.log('Popup 支付成功');
                },
                onError: () => {
                  console.log('Popup 支付失败');
                },
              })
            }
            popupProps={{
              onClose: () => {
                airwallexButtonRef.current?.closePopup();
              },
            }}
          >
            Ref Popup Airwallex
          </Airwallex.Button>
        </div>
      </div>
    );
  },
  args: {
    createOrder: async () => {
      return {
        type: 'fullFeaturedCard',
        initOptions: {
          env: 'demo',
          locale: 'en',
        },
        options: {
          currency: 'USD',
          intent: {
            id: 'test_id',
            client_secret: 'test_client_secret',
          },
          client_secret: 'test_client_secret',
        },
        onSuccess: () => {
          console.log('支付成功');
        },
        onError: () => {
          console.log('支付失败');
        },
      };
    },
  },
};
