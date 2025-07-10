<div align="center">

[English](./README.md) | 简体中文

</div>

# 特征


## 全面
支持支付宝、微信、PayPal、Stripe、Payssion、空中云汇（Airwallex）等主流支付方式，覆盖绝大部分业务场景。

## 跨端适配
H5、PC、App跨端 场景均可用，适配多端，满足多样化业务需求。

## TypeScript 友好
所有组件均由 TypeScript 编写，类型安全，开发体验优秀。

## 多种承接形式
支持支付按钮、弹窗、二维码、表单、popup、modal、蒙层等多种支付承接方式，灵活组合，满足不同业务场景。

# 安装
[npm package](https://www.npmjs.com/package/pay-sdk-react)

```shell
# 使用 npm
npm install pay-sdk-react

# 使用 yarn
yarn add pay-sdk-react

# 使用 pnpm
pnpm add pay-sdk-react
```

## 示例

### 基础使用

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import { PayButton, PaymentMethod } from 'pay-sdk-react';
import 'pay-sdk-react/dist/css/index.css';

function App() {
  return (
    <PayButton payMethod={PaymentMethod.PaypalH5} paypalUrl={''}, />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
```

### 按需加载
使用 babel-plugin-import

#### 1. 安装

```shell
npm i babel-plugin-import -D
```


#### 2. 添加配置：组件和样式的按需加载
在 babel 配置中加入：

```js
plugins: [
  [
    'babel-plugin-import',
    {
      libraryName: 'pay-sdk-react',
      libraryDirectory: 'es',
      camel2DashComponentName: false,
      style: true, // 样式按需加载
    },
  ],
];
```

# 支付场景与用法

## 支付宝
### PC 端

#### 方式一：使用 PayButton
引入 PayButton 按钮，点击唤起支付弹窗，展示支付宝二维码。

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
      <h3>PayButton-基础用法</h3>
      <PayButton payMethod={PaymentMethod.AlipayPc} createOrder={createOrder}>
        Pay Button
      </PayButton>
    </div>
  );
};

export default AlipayComponent;
```

#### 方式二：Alipay.Button
引入 Alipay，Alipay.Button 点击唤起支付弹窗，展示支付宝二维码。
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


#### 方式三：自定义按钮
使用自定义按钮，调用支付弹窗组件，展示二维码。

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
      <h3>自定义 Button - visible 参数唤起 modal</h3>
      <button onClick={() => setModalVisible(true)}>自定义 Button</button>
      <Alipay.Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        alipayProps={{ formHtml }}
      />
      <h3>自定义 Button - ref open 方法唤起 modal</h3>
      <button onClick={() => createOrder()}>自定义 Button</button>
      <Alipay.Modal ref={modalRef} />
    </div>
  );
};

export default AlipayComponent;

```

#### 方式四：自定义承接
直接引入二维码组件，自定义承接方式&展示时机。

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

### H5 端

#### 方式一：PayButton
引入支付按钮，点击唤起等待支付弹窗（或蒙层），自动提交 iframe 表单唤起支付宝 App，无 App 时跳转浏览器。
等待结果承接：支持弹窗和蒙层两种方式。

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
      <h3>PayButton-基础用法</h3>
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

#### 方式二：MAlipay.Button

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


#### 方式三：自定义表单
引入 MAlipay 表单组件，自定义触发表单时机。

```typescript
import { MAlipay } from "pay-sdk-react";

const formHtml = "";

const MAlipayComponent = () => {

  return (
    <div className="yfm-m-alipay-component">
      <h3>Alipay 表单</h3>
      <MAlipay formHtml={formHtml} />
    </div>
  );
};

export default MAlipayComponent;
```

## 微信

### PC 端

#### 方式一：PayButton
引入支付按钮，点击唤起支付弹窗，展示微信二维码。

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
      <h3>PayButton-基础用法</h3>
      <PayButton payMethod={PaymentMethod.WechatPc} createOrder={createOrder}>
        Pay Button
      </PayButton>
    </div>
  );
};

export default WechatComponent;
```

#### 方式二：Wechat.Button

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

#### 方式三：自定义按钮
使用自定义按钮，调用支付弹窗组件，展示二维码。

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
      <h3>自定义 Button - visible 参数唤起 modal</h3>
      <button onClick={() => setModalVisible(true)}>自定义 Button</button>
      <Wechat.Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        wechatProps={{ wechatUrl }}
      />

      <h3>自定义 Button - ref open 方法唤起 modal</h3>
      <button onClick={() => createOrder()}>自定义 Button</button>
      <Wechat.Modal ref={modalRef} />
    </div>
  );
};

export default WechatComponent;
```

#### 方式四：自定义承接
直接引入二维码组件，自定义承接和唤起方式。

```typescript
import { Wechat } from 'pay-sdk-react';

const wechatUrl = 'weixin://wxpay/...';

const WechatComponent = () => {
  return (
    <div className="wechat-component">
      <h3>直接使用 Wechat - 用户自定义承接方式&展示时机</h3>
      <Wechat wechatUrl={wechatUrl} />
    </div>
  );
};

export default WechatComponent;
```

### H5 端

#### 方式一：PayButton
引入支付按钮，点击唤起等待支付弹窗（或蒙层），自动打开微信支付链接，微信内浏览器自动唤起支付。
等待结果承接：支持弹窗和蒙层两种方式。

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
      <h3>PayButton - 基础用法</h3>
      <PayButton payMethod={PaymentMethod.WechatH5} createOrder={createOrder}>
        Pay Button
      </PayButton>
      <h3>PayButton - mask</h3>
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

#### 方式二：MWechatButton

```typescript
import { MWechatButton } from 'pay-sdk-react';

const wechatUrl = 'https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb?...';

const MWechatComponent = () => {
  return (
    <div className="m-wechat-component">
      <h3>wechat Button - modal</h3>
      <MWechatButton displayType={'modal'} modalProps={{ payUrl: wechatUrl }}>
        Wechat Button
      </MWechatButton>
    </div>
  );
};

export default MWechatComponent;
```

## PayPal

### 方式一：PayButton
引入支付按钮，点击唤起支付，自动打开 PayPal 支付链接，同时展示等待支付结果蒙层。

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
      <h3>PayButton-基础用法</h3>
      <PayButton payMethod={PaymentMethod.PaypalH5} createOrder={createOrder}>
        Pay Button
      </PayButton>

      <h3>PaypalButton - 不自动打开第三方支付页面 - 新tab</h3>
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

### 方式二：PaypalButton

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
      <h3>PaypalButton - 自动打开第三方支付页面 - 当前tab</h3>
      <PaypalButton
        createOrder={createOrder}
        maskProps={{ openMode: 'replace' }}
      >
        Paypal Button
      </PaypalButton>

      <h3>PaypalButton - 不自动打开第三方支付页面 - 新tab</h3>
      <PaypalButton
        createOrder={createOrder}
        maskProps={{ autoOpenWindow: false }}
      >
        Paypal Button
      </PaypalButton>

      <h3>Paypal Button - 不自动打开第三方支付页面 - 当前tab</h3>
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

### 方式一：PayButton

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
      <h3>PayButton-基础用法</h3>
      <PayButton payMethod={PaymentMethod.StripeH5} createOrder={createOrder}>
        Pay Button
      </PayButton>
    </div>
  );
};

export default StripeComponent;
```

### 方式二：Stripe.Button

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


### 方式三：自定义唤起 popup - 推荐 移动端 使用

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
      <h3>自定义 button-visible 参数唤起 popup</h3>
      <button onClick={() => setPopupVisible(true)}>自定义 button</button>
      <Stripe.Popup
        visible={popupVisible}
        onClose={() => setPopupVisible(false)}
        stripeProps={options}
      />
      <h3>自定义 button-ref open 方法唤起 popup</h3>
      <button onClick={() => createOrder()}>自定义 button</button>
      <Stripe.Popup ref={popupRef} />
    </div>
  );
};

export default StripeComponent;
```

### 方式四：自定义唤起 modal - 推荐 PC 端使用

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
      <h3>自定义 button-visible 参数唤起 modal</h3>
      <button onClick={() => setModalVisible(true)}>自定义 button</button>
      <Stripe.Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        stripeProps={options}
      />

      <h3>自定义 button-ref open 方法唤起 modal</h3>
      <button onClick={createOrder}>自定义 button</button>
      <Stripe.Modal ref={modalRef} />
    </div>
  );
};

export default StripeComponent;
```

### 方式五：Stripe 表单
引入 Stripe 表单组件，自定义承接和展示时机。

```typescript
import { Stripe } from 'pay-sdk-react';

const options = {
  stripeKey: '***',
  clientSecret: '***',
} as const;

const StripeComponent = () => {
  return (
    <div className="stripe-component">
      <h3>Stripe表单</h3>
      <Stripe {...options} />
    </div>
  );
};

export default StripeComponent;
```

## 空中云汇（Airwallex）

### 方式一：PayButton
引入支付按钮，点击唤起 popup 承接表单（推荐移动端），PC 端推荐唤起 modal。

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
        window.location.replace('支付成功结果页');
      },
    };
  };

  return (
    <div className="airwallex-component">
      <h3>PayButton-基础用法</h3>
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

### 方式二：自定义唤起 popup

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
    window.location.replace('支付成功结果页');
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
        window.location.replace('支付成功结果页');
      },
    });
  };

  return (
    <div className="airwallex-component">
      <h3>自定义 button - visible 参数唤起 popup</h3>
      <button onClick={() => setPopupVisible(true)}>自定义 button</button>
      <Airwallex.Popup
        visible={popupVisible}
        onClose={() => setPopupVisible(false)}
        airwallexProps={options}
      />

      <h3>自定义 button - ref open 方法唤起 popup</h3>
      <button onClick={createOrder}>自定义 button</button>
      <Airwallex.Popup ref={popupRef} />
    </div>
  );
};

export default AirwallexComponent;
```

### 方式三：唤起 modal

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
    window.location.replace('支付成功结果页');
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
        window.location.replace('支付成功结果页');
      },
    });
  };

  return (
    <div className="airwallex-component">
      <h3>自定义 button-visible 参数唤起 modal</h3>
      <button onClick={() => setModalVisible(true)}>自定义 button</button>
      <Airwallex.Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        airwallexProps={options}
      />

      <h3>Airwallex.button - ref open 方法唤起 modal</h3>
      <button onClick={createOrder}>自定义button</button>
      <Airwallex.Modal ref={modalRef} />
    </div>
  );
};

export default AirwallexComponent;
```


### 方式四：自定义承接
引入 Airwallex 表单组件，自定义承接和展示时机。

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
    window.location.replace('支付成功结果页');
  },
} as const;

const AirwallexComponent = () => {
  return (
    <div className="airwallex-component">
      <h3>Airwallex表单</h3>
      <Airwallex {...options} />
    </div>
  );
};

export default AirwallexComponent;
```

### 方式五：Airwallex.Button
引入支付按钮，点击打开第三方支付链接，同时唤起等待支付结果蒙层。

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

### 方式一：PayButton
引入支付按钮，点击打开第三方支付链接，同时唤起等待支付结果蒙层

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
      <h3>PayButton-基础用法</h3>
      <PayButton payMethod={PaymentMethod.Payssion} createOrder={createOrder}>
        Pay Button
      </PayButton>

      <h3>Pay Button - 不自动打开第三方支付页面</h3>
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

### 方式二：PayssionButton

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
      <h3>Payssion Button - 自动打开第三方支付页面 - 当前tab</h3>
      <PayssionButton
        createOrder={createOrder}
        maskProps={{ openMode: 'replace' }}
      >
        Payssion Button
      </PayssionButton>

      <h3>PaypalButton - 不自动打开第三方支付页面 - 新tab</h3>
      <PayssionButton
        createOrder={createOrder}
        maskProps={{ autoOpenWindow: false }}
      >
        Payssion Button
      </PayssionButton>

      <h3>PayssionButton - 不自动打开第三方支付页面 - 当前tab</h3>
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