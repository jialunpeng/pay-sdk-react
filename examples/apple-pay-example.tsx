import React, { useState } from 'react';
import { ApplePayButton, ApplePay } from '../components';

// 检查 Apple Pay 支持情况
const isApplePaySupported = () => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const hasApplePay =
    window.ApplePaySession && ApplePaySession.canMakePayments();

  return (isSafari || isIOS) && hasApplePay;
};

// 创建订单函数
const createOrder = async () => {
  try {
    // 调用后端 API 创建订单
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 1000, // 10.00 元
        currency: 'CNY',
        description: '示例商品',
      }),
    });

    if (!response.ok) {
      throw new Error('创建订单失败');
    }

    const order = await response.json();

    return {
      amount: order.amount,
      currencyCode: order.currency,
      countryCode: 'CN',
      merchantIdentifier: 'merchant.com.example.app', // 替换为您的商家标识符
      supportedNetworks: ['visa', 'masterCard', 'amex'],
      merchantName: '示例商店',
      orderId: order.id,
      itemDescription: order.description,
    };
  } catch (error) {
    console.error('创建订单失败:', error);
    throw error;
  }
};

// 处理支付结果
const handlePaymentComplete = (result: any) => {
  console.log('支付成功:', result);

  // 调用后端 API 确认支付
  fetch('/api/payments/confirm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      orderId: result.paymentData?.token?.paymentData,
      paymentToken: result.token,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('支付确认成功:', data);
      alert('支付成功！');
    })
    .catch((error) => {
      console.error('支付确认失败:', error);
      alert('支付确认失败，请联系客服');
    });
};

const handlePaymentCancel = () => {
  console.log('支付取消');
  alert('支付已取消');
};

const handlePaymentError = (error: string) => {
  console.error('支付失败:', error);
  alert(`支付失败: ${error}`);
};

// H5 移动端示例
export const MobileExample: React.FC = () => {
  const [showApplePay, setShowApplePay] = useState(false);

  if (!isApplePaySupported()) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>当前设备不支持 Apple Pay</p>
        <p>请使用 Safari 浏览器或 iOS 设备</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Apple Pay 支付示例 (移动端)</h2>

      <div style={{ marginBottom: '20px' }}>
        <h3>商品信息</h3>
        <p>商品名称: 示例商品</p>
        <p>价格: ¥10.00</p>
      </div>

      <ApplePayButton
        createOrder={createOrder}
        onPaymentComplete={handlePaymentComplete}
        onPaymentCancel={handlePaymentCancel}
        onPaymentError={handlePaymentError}
        style={{
          width: '100%',
          height: '50px',
          fontSize: '16px',
          fontWeight: 'bold',
        }}
      >
        使用 Apple Pay 支付 ¥10.00
      </ApplePayButton>

      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => setShowApplePay(true)}
          style={{
            width: '100%',
            height: '50px',
            fontSize: '16px',
            backgroundColor: '#007AFF',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          直接启动 Apple Pay
        </button>
      </div>

      {showApplePay && (
        <ApplePay
          paymentRequest={{
            amount: 1000,
            currencyCode: 'CNY',
            countryCode: 'CN',
            merchantIdentifier: 'merchant.com.example.app',
            supportedNetworks: ['visa', 'masterCard', 'amex'],
            merchantName: '示例商店',
            orderId: 'order_' + Date.now(),
            itemDescription: '示例商品',
          }}
          onPaymentComplete={handlePaymentComplete}
          onPaymentCancel={() => {
            setShowApplePay(false);
            handlePaymentCancel();
          }}
          onPaymentError={(error) => {
            setShowApplePay(false);
            handlePaymentError(error);
          }}
        />
      )}
    </div>
  );
};

// PC 网页端示例
export const DesktopExample: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState(1000);

  if (!isApplePaySupported()) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Apple Pay 支付示例 (桌面端)</h2>
        <p>当前浏览器不支持 Apple Pay</p>
        <p>请使用 Safari 浏览器访问</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Apple Pay 支付示例 (桌面端)</h2>

      <div style={{ marginBottom: '30px' }}>
        <h3>选择支付金额</h3>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          {[500, 1000, 2000, 5000].map((amount) => (
            <button
              key={amount}
              onClick={() => setSelectedAmount(amount)}
              style={{
                padding: '10px 20px',
                border:
                  selectedAmount === amount
                    ? '2px solid #007AFF'
                    : '1px solid #ddd',
                borderRadius: '8px',
                backgroundColor:
                  selectedAmount === amount ? '#F0F8FF' : 'white',
                cursor: 'pointer',
              }}
            >
              ¥{(amount / 100).toFixed(2)}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>商品信息</h3>
        <p>商品名称: 示例商品</p>
        <p>价格: ¥{(selectedAmount / 100).toFixed(2)}</p>
      </div>

      <ApplePayButton
        createOrder={async () => ({
          amount: selectedAmount,
          currencyCode: 'CNY',
          countryCode: 'CN',
          merchantIdentifier: 'merchant.com.example.app',
          supportedNetworks: ['visa', 'masterCard', 'amex'],
          merchantName: '示例商店',
          orderId: 'order_' + Date.now(),
          itemDescription: '示例商品',
        })}
        onPaymentComplete={handlePaymentComplete}
        onPaymentCancel={handlePaymentCancel}
        onPaymentError={handlePaymentError}
        displayType="modal"
        applePayModalProps={{
          title: 'Apple Pay 支付',
          mask: true,
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
          cursor: 'pointer',
        }}
      >
        使用 Apple Pay 支付 ¥{(selectedAmount / 100).toFixed(2)}
      </ApplePayButton>

      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p>💡 提示：</p>
        <ul>
          <li>确保您的设备已设置 Apple Pay</li>
          <li>使用 Safari 浏览器获得最佳体验</li>
          <li>支付过程中请勿关闭浏览器</li>
        </ul>
      </div>
    </div>
  );
};

// 响应式示例
export const ResponsiveExample: React.FC = () => {
  const isMobile = window.innerWidth <= 768;

  return <div>{isMobile ? <MobileExample /> : <DesktopExample />}</div>;
};

export default ResponsiveExample;
