<div align="center">

English | [简体中文](./README.zh-CN.md)

</div>

# Features


## Comprehensive
Supports mainstream payment methods such as Alipay, WeChat Pay, PayPal, Stripe, Payssion, and Airwallex, covering the vast majority of business scenarios.

## Cross-Platform Compatibility
Available for H5, PC, and App scenarios, adaptable to multiple platforms to meet diverse business needs.

## TypeScript Friendly
All components are written in TypeScript, ensuring type safety and an excellent development experience.

## Multiple Integration Forms
Supports payment buttons, modals, QR codes, forms, popups, modals, overlays, and more. Flexible combinations to suit various business scenarios.

# Install
[npm package](https://www.npmjs.com/package/pay-sdk-react)

```shell
# With npm
npm install pay-sdk-react

# With yarn
yarn add pay-sdk-react

# With pnpm
pnpm add pay-sdk-react
```

## Example

### Basic Usage

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import { PayButton, PaymentMethod } from 'pay-sdk-react';
import 'pay-sdk-react/dist/css/index.min.css';

function App() {
  return (
    <PayButton payMethod={PaymentMethod.PaypalH5} paypalUrl={''} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
```

### On-Demand Loading
Using babel-plugin-import

#### 1. Install

```shell
npm i babel-plugin-import -D
```


#### 2. Add Configuration: Component and Style On-demand Import
Add the following to your babel config:

```js
plugins: [
  [
    'babel-plugin-import',
    {
      libraryName: 'pay-sdk-react',
      libraryDirectory: 'es',
      camel2DashComponentName: false,
      style: true, // Enable style on-demand import
    },
  ],
];
```

# Payment Scenarios & Usage

## Alipay
### PC

#### Method 1: Use the provided Pay Button
Import the Pay Button, click to trigger a modal displaying the Alipay QR code. After the user scans the QR code to complete payment, Alipay will notify the business backend of the payment result.

```typescript
import { PayButton, PaymentMethod } from 'pay-sdk-react';

const AlipayComponent = () => {
  const createOrder = async () => {
    const res = await fetch('/create-order', {
      method: 'POST',
    });
    return { formHtml: res.htmlStr };
  };

  return (
    <div className="alipay-component">
      <h3>PayButton - Basic Usage</h3>
      <PayButton payMethod={PaymentMethod.AlipayPc} createOrder={createOrder}>
        Pay Button
      </PayButton>
    </div>
  );
};

export default AlipayComponent;
```

#### Method 2: Use a Alipay button
Import Alipay, Alipay.Button click to trigger a modal displaying the Alipay QR code. After the user scans the QR code to complete payment, Alipay will notify the business backend of the payment result.
```typescript
import { Alipay } from 'pay-sdk-react';

const AlipayComponent = () => {
  const createOrder = async () => {
    const res = await fetch('/create-order', {
      method: 'POST',
    });
    return { formHtml: res.htmlStr };
  };

  return (
    <div className="alipay-component">
      <h3>Alipay.Button - modal</h3>
      <Alipay.Button createOrder={createOrder}>alipay Button</Alipay.Button>
    </div>
  );
};

export default AlipayComponent;
```


#### Method 3: Use a custom button
Use your own button, and call the modal component to display the QR code. After the user scans the QR code to complete payment, Alipay will notify the business backend of the payment result.

```typescript
import { useRef, useState } from 'react';
import { Alipay, AlipayModalRef } from 'pay-sdk-react';

const formHtml = '<form ... />';

const AlipayComponent = () => {
  const modalRef = useRef<AlipayModalRef>(null);

  const [modalVisible, setModalVisible] = useState(false);

  const createOrder = async () => {
    const res = await fetch('/create-order', {
      method: 'POST',
    });
    modalRef.current?.open({ formHtml: res.htmlStr });
  };

  return (
    <div className="alipay-component">
      <h3>Custom Button - Trigger modal with visible prop</h3>
      <button onClick={() => setModalVisible(true)}>Custom Button</button>
      <Alipay.Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        alipayProps={{ formHtml }}
      />
      <h3>Custom Button - Trigger modal with ref open method</h3>
      <button onClick={() => createOrder()}>Custom Button</button>
      <Alipay.Modal ref={modalRef} />
    </div>
  );
};

export default AlipayComponent;

```

#### Method 4: Custom integration
Directly import the QR code component and customize the integration and display timing. After the user scans the QR code to complete payment, Alipay will notify the business backend of the payment result.

```typescript
import { Alipay } from 'pay-sdk-react';

const formHtml = '<form ... />';

const AlipayComponent = () => {
  return (
    <div className="alipay-component">
      <Alipay formHtml={formHtml} />
    </div>
  );
};

export default AlipayComponent;
```

### H5

#### Method 1: PayButton
Import the PayButton, click to trigger a waiting modal (or overlay), auto-submit the iframe form to launch the Alipay app, or open in browser if the app is not installed. After the user completes payment, Alipay will notify the business backend of the payment result. Result handling: supports both modal and overlay.

```typescript
import { PayButton, PaymentMethod } from 'pay-sdk-react';

const MAlipayComponent = () => {
  const createOrder = async () => {
    const res = await fetch('/create-order', {
      method: 'POST',
    });
    return { formHtml: res.htmlStr };
  };

  return (
    <div className="m-alipay-component">
      <h3>PayButton - Basic Usage</h3>
      <PayButton
        payMethod={PaymentMethod.AlipayH5}
        createOrder={createOrder}
        displayType={'modal'}
      >
        Pay Button
      </PayButton>
    </div>
  );
};

export default MAlipayComponent;
```

#### Method 2: MAlipay.Button
Import MAlipay.Button, click to trigger a waiting modal (or overlay), auto-submit the iframe form to launch the Alipay app, or open in browser if the app is not installed. After the user completes payment, Alipay will notify the business backend of the payment result.

```typescript
import { MAlipay } from "pay-sdk-react";

const MAlipayComponent = () => {

  const createOrder = async() => {
     const res = await fetch('/create-order', {
      method: 'POST',
    });
   return { formHtml: res.htmlStr };
  }

  return (
    <div className="m-alipay-component">
      <h3>Alipay Button - mask</h3>
      <MAlipay.Button
        displayType={'mask'}
        createOrder={createOrder}
      >
        Alipay Button
      </MAlipay.Button>
    </div>
  );
};

export default MAlipayComponent;
```


#### Method 3: Custom form
Import the MAlipay form component and customize the trigger timing. After the user completes payment, Alipay will notify the business backend of the payment result.

```typescript
import { MAlipay } from "pay-sdk-react";

const formHtml = "";

const MAlipayComponent = () => {

  return (
    <div className="yfm-m-alipay-component">
      <h3>Alipay Form</h3>
      <MAlipay formHtml={formHtml} />
    </div>
  );
};

export default MAlipayComponent;
```

## WeChat

### PC

#### Method 1: PayButton
Import the PayButton, click to trigger a modal displaying the WeChat QR code. After the user scans the QR code to complete payment, WeChat will notify the business backend of the payment result.

```typescript
import { PayButton, PaymentMethod } from 'pay-sdk-react';

const WechatComponent = () => {
  const createOrder = async () => {
    const res = await fetch('/create-order', {
      method: 'POST',
    });
    return { wechatUrl: res.url };
  };

  return (
    <div className="wechat-component">
      <h3>PayButton - Basic Usage</h3>
      <PayButton payMethod={PaymentMethod.WechatPc} createOrder={createOrder}>
        Pay Button
      </PayButton>
    </div>
  );
};

export default WechatComponent;
```

#### Method 2: Wechat.Button
Import Wechat.Button, click to trigger a modal displaying the WeChat QR code. After the user scans the QR code to complete payment, WeChat will notify the business backend of the payment result.

```typescript
import { Wechat } from 'pay-sdk-react';

const WechatComponent = () => {
  const createOrder = async () => {
    const res = await fetch('/create-order', {
      method: 'POST',
    });
    return { wechatUrl: res.url };
  };

  return (
    <div className="wechat-component">
      <h3>Wechat.Button - modal</h3>
      <Wechat.Button createOrder={createOrder}>Wechat Button</Wechat.Button>
    </div>
  );
};

export default WechatComponent;
```

#### Method 3: Use a custom button
Use your own button, and call the modal component to display the QR code. After the user scans the QR code to complete payment, WeChat will notify the business backend of the payment result.

```typescript
import { useRef, useState } from 'react';
import { Wechat, WechatModalRef } from 'pay-sdk-react';

const wechatUrl = 'weixin://wxpay...';

const WechatComponent = () => {
  const modalRef = useRef<WechatModalRef>(null);

  const [modalVisible, setModalVisible] = useState(false);

  const createOrder = async () => {
    const res = await fetch('/create-order', {
      method: 'POST',
    });
    modalRef.current?.open({ wechatUrl: res.url });
  };

  return (
    <div className="wechat-component">
      <h3>Custom Button - Trigger modal with visible prop</h3>
      <button onClick={() => setModalVisible(true)}>Custom Button</button>
      <Wechat.Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        wechatProps={{ wechatUrl }}
      />

      <h3>Custom Button - Trigger modal with ref open method</h3>
      <button onClick={() => createOrder()}>Custom Button</button>
      <Wechat.Modal ref={modalRef} />
    </div>
  );
};

export default WechatComponent;
```

#### Method 4: Custom integration
Directly import the QR code component and customize the integration and display timing. After the user scans the QR code to complete payment, WeChat will notify the business backend of the payment result.

```typescript
import { Wechat } from 'pay-sdk-react';

const wechatUrl = 'weixin://wxpay/...';

const WechatComponent = () => {
  return (
    <div className="wechat-component">
      <h3>Directly use Wechat - Custom integration and display timing</h3>
      <Wechat wechatUrl={wechatUrl} />
    </div>
  );
};

export default WechatComponent;
```

### H5

#### Method 1: PayButton
Import the PayButton, click to trigger a waiting modal (or overlay), auto-open the WeChat payment link, and auto-trigger payment in the WeChat browser. After the user completes payment, WeChat will notify the business backend of the payment result. Result handling: supports both modal and overlay.

```typescript
import { PayButton, PaymentMethod } from 'pay-sdk-react';

const MWechatComponent = () => {
  const createOrder = async () => {
    const res = await fetch('/create-order', {
      method: 'POST',
    });
    return { wechatUrl: res.url };
  };

  return (
    <div className="m-wechat-component">
      <h3>PayButton - Basic Usage</h3>
      <PayButton payMethod={PaymentMethod.WechatH5} createOrder={createOrder}>
        Pay Button
      </PayButton>
      <h3>PayButton - Mask</h3>
      <PayButton
        payMethod={PaymentMethod.WechatH5}
        createOrder={createOrder}
        displayType="mask"
      >
        Pay Button
      </PayButton>
    </div>
  );
};

export default MWechatComponent;
```

#### Method 2: MWechatButton
Import MWechatButton, click to trigger a waiting modal (or overlay), auto-open the WeChat payment link, and auto-trigger payment in the WeChat browser. After the user completes payment, WeChat will notify the business backend of the payment result.

```typescript
import { MWechatButton } from 'pay-sdk-react';

const wechatUrl = 'https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb?...';

const MWechatComponent = () => {
  return (
    <div className="m-wechat-component">
      <h3>Wechat Button - Modal</h3>
      <MWechatButton displayType={'modal'} modalProps={{ payUrl: wechatUrl }}>
        Wechat Button
      </MWechatButton>
    </div>
  );
};

export default MWechatComponent;
```

## PayPal

Import the PayButton, click to trigger payment, auto-open the PayPal payment link, and show a waiting overlay. After PayPal payment is completed, PayPal will redirect to the business-specified result page, and the redirect address is passed in when the business backend service calls the PayPal official payment order creation API.

### Method 1: PayButton
Import the PayButton, click to trigger payment, auto-open the PayPal payment link, and show a waiting overlay. After the user completes payment, PayPal will redirect to the business-specified result page.

```typescript
import { PayButton, PaymentMethod } from 'pay-sdk-react';

const PaypalComponent = () => {
  const createOrder = async () => {
    const res = await fetch('/create-order', {
      method: 'POST',
    });
    return { wechatUrl: res.url };
  };

  return (
    <div className="paypal-component">
      <h3>PayButton - Basic Usage</h3>
      <PayButton payMethod={PaymentMethod.PaypalH5} createOrder={createOrder}>
        Pay Button
      </PayButton>

      <h3>PaypalButton - Do not auto open third-party payment page - new tab</h3>
      <PayButton
        payMethod={PaymentMethod.PaypalH5}
        createOrder={createOrder}
        maskProps={{ autoOpenWindow: false }}
      >
        Pay Button
      </PayButton>
    </div>
  );
};

export default PaypalComponent;
```

### Method 2: PaypalButton
Import PaypalButton, click to trigger payment, auto-open the PayPal payment link, and show a waiting overlay. After the user completes payment, PayPal will redirect to the business-specified result page.

```typescript
import { PaypalButton } from 'pay-sdk-react';

const paypalUrl = 'https://www.sandbox.paypal.com/checkoutnow?...';

const PaypalComponent = () => {
  const createOrder = async () => {
    const res = await fetch('/create-order', {
      method: 'POST',
    });
    return { wechatUrl: res.url };
  };

  return (
    <div className="paypal-component">
      <h3>PaypalButton - Auto open third-party payment page - current tab</h3>
      <PaypalButton
        createOrder={createOrder}
        maskProps={{ openMode: 'replace' }}
      >
        Paypal Button
      </PaypalButton>

      <h3>PaypalButton - Do not auto open third-party payment page - new tab</h3>
      <PaypalButton
        createOrder={createOrder}
        maskProps={{ autoOpenWindow: false }}
      >
        Paypal Button
      </PaypalButton>

      <h3>Paypal Button - Do not auto open third-party payment page - current tab</h3>
      <PaypalButton
        maskProps={{
          payUrl: paypalUrl,
          autoOpenWindow: false,
          openMode: 'href',
        }}
      >
        Paypal Button
      </PaypalButton>
    </div>
  );
};

export default PaypalComponent;
```

## Stripe

Import payment components to use Stripe payment. After Stripe payment is completed, Stripe will redirect to the business-specified result page, and the redirect address is passed in when the business backend service calls the Stripe official payment order creation API.

### Method 1: PayButton
Import the PayButton, click to trigger payment modal or popup, display Stripe payment form. After the user completes payment, Stripe will redirect to the business-specified result page.

```typescript
import { PayButton, PaymentMethod } from 'pay-sdk-react';

const StripeComponent = () => {
  const createOrder = async () => {
    return await fetch('/create-order', {
      method: 'POST',
    });
  };

  return (
    <div className="stripe-component">
      <h3>PayButton - Basic Usage</h3>
      <PayButton payMethod={PaymentMethod.StripeH5} createOrder={createOrder}>
        Pay Button
      </PayButton>
    </div>
  );
};

export default StripeComponent;
```

### Method 2: Stripe.Button
Import Stripe.Button, click to trigger payment modal or popup, display Stripe payment form. After the user completes payment, Stripe will redirect to the business-specified result page.

```typescript
import { Stripe } from 'pay-sdk-react';

const StripeComponent = () => {
  const createOrder = async () => {
    return await fetch('/create-order', {
      method: 'POST',
    });
  };

  return (
    <div className="stripe-component">
      <h3>Stripe.Button</h3>
      <Stripe.Button createOrder={createOrder}>Stripe Button</Stripe.Button>
    </div>
  );
};

export default StripeComponent;
```


### Method 3: Custom trigger popup - Recommended for mobile
Use custom button to call Stripe.Popup component, display Stripe payment form. After the user completes payment, Stripe will redirect to the business-specified result page.

```typescript
import { useRef, useState } from 'react';
import { Stripe, StripePopupRef } from 'pay-sdk-react';

const options = {
  stripeKey: '***',
  clientSecret: '***',
} as const;

const StripeComponent = () => {
  const popupRef = useRef<StripePopupRef>(null);

  const [popupVisible, setPopupVisible] = useState(false);

  const createOrder = async () => {
    const res = await fetch('/create-order', {
      method: 'POST',
    });
    popupRef.current?.open(res);
  };

  return (
    <div className="stripe-component">
      <h3>Custom button - Trigger popup with visible prop</h3>
      <button onClick={() => setPopupVisible(true)}>Custom Button</button>
      <Stripe.Popup
        visible={popupVisible}
        onClose={() => setPopupVisible(false)}
        stripeProps={options}
      />
      <h3>Custom button - Trigger popup with ref open method</h3>
      <button onClick={() => createOrder()}>Custom Button</button>
      <Stripe.Popup ref={popupRef} />
    </div>
  );
};

export default StripeComponent;
```

### Method 4: Custom trigger modal - Recommended for PC
Use custom button to call Stripe.Modal component, display Stripe payment form. After the user completes payment, Stripe will redirect to the business-specified result page.

```typescript
import { useRef, useState } from 'react';
import { Stripe, StripeModalRef } from 'pay-sdk-react';

const options = {
  stripeKey: '***',
  clientSecret: '***',
} as const;

const StripeComponent = () => {
  const modalRef = useRef<StripeModalRef>(null);

  const [modalVisible, setModalVisible] = useState(false);

  const createOrder = async () => {
    const res = await fetch('/create-order', {
      method: 'POST',
    });
    modalRef.current?.open(res);
  };

  return (
    <div className="stripe-component">
      <h3>Custom button - Trigger modal with visible prop</h3>
      <button onClick={() => setModalVisible(true)}>Custom Button</button>
      <Stripe.Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        stripeProps={options}
      />

      <h3>Custom button - Trigger modal with ref open method</h3>
      <button onClick={createOrder}>Custom Button</button>
      <Stripe.Modal ref={modalRef} />
    </div>
  );
};

export default StripeComponent;
```

### Method 5: Stripe Form
Import the Stripe form component and customize the integration and display timing. After the user completes payment, Stripe will redirect to the business-specified result page.

```typescript
import { Stripe } from 'pay-sdk-react';

const options = {
  stripeKey: '***',
  clientSecret: '***',
} as const;

const StripeComponent = () => {
  return (
    <div className="stripe-component">
      <h3>Stripe Form</h3>
      <Stripe {...options} />
    </div>
  );
};

export default StripeComponent;
```

## Airwallex

Import payment components to use Airwallex payment. After Airwallex payment is completed, the Airwallex payment component will callback the onSuccess method, and the business executes subsequent logic.

### Method 1: PayButton
Import the PayButton, click to trigger a popup for the payment form (recommended for mobile), or a modal for PC. After the user completes payment, the Airwallex payment component will callback the onSuccess method, and the business executes subsequent logic.

```typescript
import { PayButton, PaymentMethod } from 'pay-sdk-react';

const AirwallexComponent = () => {
  const createOrder = async () => {
    const res = await fetch('/create-order', {
      method: 'POST',
    });
    return {
      type: 'fullFeaturedCard',
      initOptions: {
        env: 'demo',
        locale: 'en',
      },
      options: {
        currency: res.currency,
        intent: {
          id: res.intentId,
          client_secret: res.client_secret,
        },
        client_secret: res.client_secret,
      },
      onSuccess: () => {
        window.location.replace('Payment Success Page');
      },
    };
  };

  return (
    <div className="airwallex-component">
      <h3>PayButton - Basic Usage</h3>
      <PayButton
        payMethod={PaymentMethod.Airwallex}
        payMode="embedded"
        displayType="popup"
        createOrder={createOrder}
      >
        Pay Button
      </PayButton>
    </div>
  );
};

export default AirwallexComponent;
```

### Method 2: Custom trigger popup
Use custom button to call Airwallex.Popup component, display Airwallex payment form. After the user completes payment, the Airwallex payment component will callback the onSuccess method, and the business executes subsequent logic.

```typescript
import { useRef, useState } from 'react';
import { Airwallex, AirwallexPopupRef } from 'pay-sdk-react';

const intentId = '***';
const clientSecret = '***';

const options = {
  type: 'fullFeaturedCard',
  initOptions: {
    env: 'demo',
    locale: 'en',
  },
  options: {
    currency: 'USD',
    intent: {
      id: intentId,
      client_secret: clientSecret,
    },
    client_secret: clientSecret,
  },
  onSuccess: () => {
    window.location.replace('Payment Success Page');
  },
} as const;

const AirwallexComponent = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const popupRef = useRef<AirwallexPopupRef>(null);

  const createOrder = async () => {
    const res = await fetch('/create-order', {
      method: 'POST',
    });
    popupRef.current?.open({
      type: 'fullFeaturedCard',
      initOptions: {
        env: 'demo',
        locale: 'en',
      },
      options: {
        currency: res.currency,
        intent: {
          id: res.intentId,
          client_secret: res.client_secret,
        },
        client_secret: res.client_secret,
      },
      onSuccess: () => {
        window.location.replace('Payment Success Page');
      },
    });
  };

  return (
    <div className="airwallex-component">
      <h3>Custom button - Trigger popup with visible prop</h3>
      <button onClick={() => setPopupVisible(true)}>Custom Button</button>
      <Airwallex.Popup
        visible={popupVisible}
        onClose={() => setPopupVisible(false)}
        airwallexProps={options}
      />

      <h3>Custom button - Trigger popup with ref open method</h3>
      <button onClick={createOrder}>Custom Button</button>
      <Airwallex.Popup ref={popupRef} />
    </div>
  );
};

export default AirwallexComponent;
```

### Method 3: Trigger modal
Use custom button to call Airwallex.Modal component, display Airwallex payment form. After the user completes payment, the Airwallex payment component will callback the onSuccess method, and the business executes subsequent logic.

```typescript
import { useRef, useState } from 'react';
import { Airwallex, AirwallexModalRef } from 'pay-sdk-react';

const intentId = '***';
const clientSecret = '***';

const options = {
  type: 'fullFeaturedCard',
  initOptions: {
    env: 'demo',
    locale: 'en',
  },
  options: {
    currency: 'USD',
    intent: {
      id: intentId,
      client_secret: clientSecret,
    },
    client_secret: clientSecret,
  },
  onSuccess: () => {
    window.location.replace('Payment Success Page');
  },
} as const;

const AirwallexComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const modalRef = useRef<AirwallexModalRef>(null);

  const createOrder = async () => {
    const res = await fetch('/create-order', {
      method: 'POST',
    });
    modalRef.current?.open({
      type: 'fullFeaturedCard',
      initOptions: {
        env: 'demo',
        locale: 'en',
      },
      options: {
        currency: res.currency,
        intent: {
          id: res.intentId,
          client_secret: res.client_secret,
        },
        client_secret: res.client_secret,
      },
      onSuccess: () => {
        window.location.replace('Payment Success Page');
      },
    });
  };

  return (
    <div className="airwallex-component">
      <h3>Custom button - Trigger modal with visible prop</h3>
      <button onClick={() => setModalVisible(true)}>Custom Button</button>
      <Airwallex.Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        airwallexProps={options}
      />

      <h3>Airwallex.button - Trigger modal with ref open method</h3>
      <button onClick={createOrder}>Custom Button</button>
      <Airwallex.Modal ref={modalRef} />
    </div>
  );
};

export default AirwallexComponent;
```


### Method 4: Custom integration
Import the Airwallex form component and customize the integration and display timing. After the user completes payment, the Airwallex payment component will callback the onSuccess method, and the business executes subsequent logic.

```typescript
import { Airwallex } from 'pay-sdk-react';

const intentId = '***';
const clientSecret = '***';

const options = {
  type: 'fullFeaturedCard',
  initOptions: {
    env: 'demo',
    locale: 'en',
  },
  options: {
    currency: 'USD',
    intent: {
      id: intentId,
      client_secret: clientSecret,
    },
    client_secret: clientSecret,
  },
  onSuccess: () => {
    window.location.replace('Payment Success Page');
  },
} as const;

const AirwallexComponent = () => {
  return (
    <div className="airwallex-component">
      <h3>Airwallex Form</h3>
      <Airwallex {...options} />
    </div>
  );
};

export default AirwallexComponent;
```

### Method 5: Airwallex.Button
Import the Pay Button, click to open a third-party payment link and show a waiting overlay. After the user completes payment, Airwallex will redirect to the business-specified result page.

```typescript
import { Airwallex } from 'pay-sdk-react';

const AirwallexComponent = () => {
  const createOrder = async () => {
    const res = await fetch('/create-order', {
      method: 'POST',
    });
    return { airwallexUrl: res.url };
  };

  return (
    <div className="airwallex-component">
      <h3>Airwallex.Button</h3>
      <Airwallex.Button payMode={'redirect'} createOrder={createOrder}>
        Airwallex Button
      </Airwallex.Button>
    </div>
  );
};

export default AirwallexComponent;
```

## Payssion

Import payment components to use Payssion payment. After Payssion payment is completed, Payssion will redirect to the business-specified result page, and the redirect address is passed in when the business backend service calls the Payssion official payment order creation API.

### Method 1: PayButton
Import the PayButton, click to open a third-party payment link and show a waiting overlay. After the user completes payment, Payssion will redirect to the business-specified result page.

```typescript
import { PayButton, PaymentMethod } from 'pay-sdk-react';

const PayssionComponent = () => {
  const createOrder = async () => {
    const res = await fetch('/create-order', {
      method: 'POST',
    });
    return { payssionUrl: res.url };
  };

  return (
    <div className="payssion-component">
      <h3>PayButton - Basic Usage</h3>
      <PayButton payMethod={PaymentMethod.Payssion} createOrder={createOrder}>
        Pay Button
      </PayButton>

      <h3>Pay Button - Do not auto open third-party payment page</h3>
      <PayButton
        createOrder={createOrder}
        maskProps={{ autoOpenWindow: false }}
      >
        Pay Button
      </PayButton>
    </div>
  );
};

export default PayssionComponent;
```

### Method 2: PayssionButton
Import PayssionButton, click to open a third-party payment link and show a waiting overlay. After the user completes payment, Payssion will redirect to the business-specified result page.

```typescript
import { PayssionButton } from 'pay-sdk-react';

const PayssionComponent = () => {
  const createOrder = async () => {
    const res = await fetch('/create-order', {
      method: 'POST',
    });
    return { payssionUrl: res.url };
  };

  return (
    <div className="payssion-component">
      <h3>Payssion Button - Auto open third-party payment page - current tab</h3>
      <PayssionButton
        createOrder={createOrder}
        maskProps={{ openMode: 'replace' }}
      >
        Payssion Button
      </PayssionButton>

      <h3>PaypalButton - Do not auto open third-party payment page - new tab</h3>
      <PayssionButton
        createOrder={createOrder}
        maskProps={{ autoOpenWindow: false }}
      >
        Payssion Button
      </PayssionButton>

      <h3>PayssionButton - Do not auto open third-party payment page - current tab</h3>
      <PayssionButton
        createOrder={createOrder}
        maskProps={{ autoOpenWindow: false, openMode: 'href' }}
      >
        Payssion Button
      </PayssionButton>
    </div>
  );
};

export default PayssionComponent;
```