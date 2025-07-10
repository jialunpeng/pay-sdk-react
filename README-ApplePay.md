# Apple Pay 集成方案

## 概述

本文档介绍如何在支付SDK中集成Apple Pay功能，支持H5移动端和PC网页端。

## 支持环境

- **iOS设备**: iPhone、iPad、iPod touch (Safari浏览器)
- **macOS**: Safari浏览器
- **Web**: Safari浏览器 (iOS和macOS)

## 快速开始

### 1. 安装依赖

```bash
npm install pay-sdk
```

### 2. 基础使用

```tsx
import { ApplePayButton } from 'pay-sdk';

const App = () => {
  const createOrder = async () => {
    // 调用后端API创建订单
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: 1000, // 10.00元
        currency: 'CNY',
        description: '商品描述',
      }),
    });
    
    const order = await response.json();
    
    return {
      amount: order.amount,
      currencyCode: order.currency,
      countryCode: 'CN',
      merchantIdentifier: 'merchant.com.example.app', // 您的商家标识符
      supportedNetworks: ['visa', 'masterCard', 'amex'],
      merchantName: '您的商店名称',
      orderId: order.id,
      itemDescription: order.description,
    };
  };

  return (
    <ApplePayButton
      createOrder={createOrder}
      onPaymentComplete={(result) => console.log('支付成功:', result)}
      onPaymentCancel={() => console.log('支付取消')}
      onPaymentError={(error) => console.log('支付失败:', error)}
    >
      使用 Apple Pay 支付
    </ApplePayButton>
  );
};
```

### 3. H5移动端集成

```tsx
import { ApplePayButton } from 'pay-sdk';

const MobileApp = () => {
  return (
    <ApplePayButton
      displayType="popup"
      createOrder={createOrder}
      style={{
        width: '100%',
        height: '50px',
        fontSize: '16px',
        fontWeight: 'bold',
      }}
    >
      使用 Apple Pay 支付
    </ApplePayButton>
  );
};
```

### 4. PC网页端集成

```tsx
import { ApplePayButton } from 'pay-sdk';

const DesktopApp = () => {
  return (
    <ApplePayButton
      displayType="modal"
      createOrder={createOrder}
      applePayModalProps={{
        title: 'Apple Pay 支付',
        onClose: () => console.log('模态框关闭'),
      }}
      style={{
        width: '100%',
        height: '50px',
        fontSize: '16px',
        fontWeight: 'bold',
        backgroundColor: '#000',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
      }}
    >
      使用 Apple Pay 支付
    </ApplePayButton>
  );
};
```

## 前置条件

### 1. Apple Developer 配置

1. 在 [Apple Developer](https://developer.apple.com/) 注册商家标识符
2. 配置支付处理证书
3. 设置域名验证

### 2. 域名配置

在您的网站根目录创建文件：
`.well-known/apple-developer-merchantid-domain-association`

### 3. 后端API

需要实现以下API：

```typescript
// 创建订单
POST /api/orders
{
  "amount": 1000,
  "currency": "CNY",
  "description": "商品描述"
}

// 商家验证
POST /api/apple-pay/validate-merchant
{
  "validationURL": "https://..."
}

// 确认支付
POST /api/payments/confirm
{
  "orderId": "order_123",
  "paymentToken": "token_data"
}
```

## 环境检测

```tsx
const isApplePaySupported = () => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const hasApplePay = window.ApplePaySession && ApplePaySession.canMakePayments();
  
  return (isSafari || isIOS) && hasApplePay;
};
```

## 错误处理

```tsx
const handlePaymentError = (error) => {
  switch (error) {
    case 'Apple Pay is not available':
      // Apple Pay 不可用
      showAlternativePaymentMethods();
      break;
    case 'Merchant validation failed':
      // 商家验证失败
      showErrorMessage('商家验证失败，请联系客服');
      break;
    case 'Payment processing failed':
      // 支付处理失败
      showErrorMessage('支付失败，请重试');
      break;
    default:
      showErrorMessage('支付异常，请联系客服');
      break;
  }
};
```

## 注意事项

1. **HTTPS要求**: 必须在HTTPS环境下使用
2. **浏览器限制**: 仅在Safari浏览器中支持
3. **设备要求**: 需要支持Apple Pay的设备
4. **金额格式**: 金额必须以分为单位
5. **域名验证**: 确保域名已通过Apple验证

## 常见问题

### Q: 为什么Apple Pay按钮不显示？
A: 检查以下几点：
- 是否在Safari浏览器中
- 是否在HTTPS环境下
- 设备是否支持Apple Pay
- 是否已设置Apple Pay

### Q: 商家验证失败怎么办？
A: 检查以下几点：
- 商家标识符是否正确
- 域名验证文件是否正确配置
- 后端验证API是否正常工作

### Q: 支付成功后如何处理？
A: 在`onPaymentComplete`回调中：
1. 调用后端API确认支付
2. 更新订单状态
3. 显示成功页面

## 技术支持

如有问题，请参考：
- [Apple Pay Web 开发指南](https://developer.apple.com/documentation/apple_pay_on_the_web)
- [Apple Pay 商家指南](https://developer.apple.com/apple-pay/)
- [支付SDK文档](./docs/ApplePay.md) 