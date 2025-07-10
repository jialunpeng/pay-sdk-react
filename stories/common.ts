export const PAYPAL_URL =
  'https://www.sandbox.paypal.com/checkoutnow?atomic-event-state=eyJkb21haW4iOiJzZGtfcGF5cGFsX3Y1IiwiZXZlbnRzIjpbXSwiaW50ZW50IjoiY2xpY2tfcGF5bWVudF9idXR0b24iLCJpbnRlbnRUeXBlIjoiY2xpY2siLCJpbnRlcmFjdGlvblN0YXJ0VGltZSI6MjE3NCwidGltZVN0YW1wIjoyMTc0LCJ0aW1lT3JpZ2luIjoxNzUwMTU1MzQ1NDY2LjcsInRhc2siOiJzZWxlY3Rfb25lX3RpbWVfY2hlY2tvdXQiLCJmbG93Ijoib25lLXRpbWUtY2hlY2tvdXQiLCJ1aVN0YXRlIjoid2FpdGluZyIsInBhdGgiOiIvc21hcnQvYnV0dG9ucyIsInZpZXdOYW1lIjoicGF5cGFsLXNkayJ9&sessionID=uid_5f6dd39857_mta6mtq6ntg&buttonSessionID=uid_ed4bafbdb0_mta6mtu6ndu&stickinessID=uid_bf2cacdd6e_mti6mzg6nti&smokeHash=&sign_out_user=false&fundingSource=paypal&buyerCountry=HK&locale.x=en_US&commit=true&client-metadata-id=uid_5f6dd39857_mta6mtq6ntg&standaloneFundingSource=paypal&branded=true&clientID=AR7ygvITQgI8LupbyUXOLgXijDpwmljoYS_qyAkekj_edmB5DnOYtSbyiHXHwut9hL6ab19DkmPdfZes&env=sandbox&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWwuY29tL3Nkay9qcz9jbGllbnQtaWQ9QVI3eWd2SVRRZ0k4THVwYnlVWE9MZ1hpakRwd21sam9ZU19xeUFrZWtqX2VkbUI1RG5PWXRTYnlpSFhId3V0OWhMNmFiMTlEa21QZGZaZXMmY3VycmVuY3k9VVNEJmxvY2FsZT1lbl9VUyZjb21wb25lbnRzPWJ1dHRvbnMmaW50ZW50PXN1YnNjcmlwdGlvbiZ2YXVsdD10cnVlIiwiYXR0cnMiOnsiZGF0YS1zZGstaW50ZWdyYXRpb24tc291cmNlIjoicmVhY3QtcGF5cGFsLWpzIiwiZGF0YS11aWQiOiJ1aWRfYXd5dmhyYm9tYmR6cGxudXlieHRoenB3ZWpybGJnIn19&country.x=US&xcomponent=1&version=5.0.489&hasShippingCallback=false&token=8FU66668RX2714133';

export const STRIPE_MAP = {
  clientSecret:
    'cs_live_a1Q76D4DKAetadSRBeJ2qnYENEJLzCF6kShOzLeOqsf6jw4kEEujPiqqPq_secret_fid2cGd2ZndsdXFsamtQa2x0cGBrYHZ2QGtkZ2lgYSc%2FY2RpdmApJ2R1bE5gfCc%2FJ3VuWmlsc2BaMDRKZjdJSU40Qkw0RE5RNl9EPG08dWF3UFdoUzR0YDw8TWNUcz1GZGd0TktpNjFAblJWaUxfVTFqSHJIZ2c1cG5HTHBSNEhmTUl8QkxqZFJsd0FQQ2JMc101NUR3XFdxZGJjJykncGxIamFgJz8nYGhnYGFhYGEnKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGFsd2BmcUprRmpodWlgcWxqayc%2FJ2RpcmR8did4JSUl',
  stripeKey:
    'pk_live_51Oc2LLK1GI1AKT3ZA9h9pdrURmV1qe99HfQv8CabqKNl34EkWSlIZP4oMwMbb0ukBIuW1McHLyGIoaWirDUFgIvX00ArYRtagf',
};

export const PAYSSION_URL = 'https://www.payssion.com/pay/Z617665256173977';

export const ALIPAY_FORM_HTML_H5 =
  "<form id='alipaysubmit' name='alipaysubmit' action='https://openapi.alipay.com/gateway.do?charset=UTF-8' method='POST'><input type='hidden' name='biz_content' value='{\"subject\":\"FastMoss:专业版\",\"product_code\":\"QUICK_WAP_WAY\",\"body\":\"FastMoss:专业版\",\"out_trade_no\":\"yp20250618140923134623\",\"total_amount\":\"536\",\"timeout_express\":\"60m\"}'/><input type='hidden' name='notify_url' value='https://test.fastmoss.com/payment/alipayCallback'/><input type='hidden' name='return_url' value='https://mtest.fastmoss.com?order_id=fd20250618140923084000&pay_channel=6'/><input type='hidden' name='quit_url' value='https://test.fastmoss.com'/><input type='hidden' name='method' value='alipay.trade.wap.pay'/><input type='hidden' name='version' value='1.0'/><input type='hidden' name='alipay_sdk' value='OpenAPI-Generator/3.0.0/PHP'/><input type='hidden' name='app_id' value='2021003155602183'/><input type='hidden' name='format' value='json'/><input type='hidden' name='timestamp' value='2025-06-18 14:09:23'/><input type='hidden' name='charset' value='UTF-8'/><input type='hidden' name='sign_type' value='RSA2'/><input type='hidden' name='app_cert_sn' value='e80df24d51a278f0e7715a787536382b'/><input type='hidden' name='alipay_root_cert_sn' value='687b59193f3f462dd5336e5abf83c5d8_02941eef3187dddf3d3b83462e1dfcf6'/><input type='hidden' name='sign' value='TPCSsIpD/1dKoCpTzv2PJb0cI+vQ6cYZTCGwgvRLQwFBOOhZbQyJ8f2+m1w3iTA9tvvdn1ilc+9pC6c8MSXm6Tps5h02/ZTdUy5wx5/FNrnDrDUnJhQnXYYhRHwcG97H/6QaX6VXlOqFNQSrI9LxOq7PNEEWSe5RP5t4qZUGsDdKaC4Mtdw2KEpXW9g6szeiFjKa+c5pUCvXb1NOE3AXEraj81PA9iEnS07OLv0keFqGpV3vbZcLRoUecEmQkWZf2ojjrmtqvSenpD+YDO/a4Y5E2iMW0v9d4szGhv9f61B88FqcFCbI7sugEgLA2NRbCqs3WM+pDY8jZEDY3HWALQ=='/><input type='submit' value='ok' style='display:none;'></form><script>document.forms['alipaysubmit'].submit();</script>";

export const WECHAT_URL_H5 =
  'https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb?prepay_id=wx18173721064444f2d7e23123d930900000&package=2319663799&redirect_url=https%3A%2F%2Fmtest.fastmoss.com%2Fpages%2FuserCenter%2FmemberPrivilege%2Findex%3Fpay_channel%3Dwechat%26order_id%3Dfd20250618173720808453';

export const ALIPAY_FORM_HTML =
  "<form id='alipaysubmit' name='alipaysubmit' action='https://openapi.alipay.com/gateway.do?charset=UTF-8' method='POST'><input type='hidden' name='biz_content' value='{\"subject\":\"FastMoss:旗舰版\",\"product_code\":\"FAST_INSTANT_TRADE_PAY\",\"body\":\"FastMoss:旗舰版\",\"qr_pay_mode\":\"4\",\"integration_type\":\"PCWEB\",\"out_trade_no\":\"yp20250701165710411550\",\"total_amount\":\"5686\"}'/><input type='hidden' name='notify_url' value='https://test.fastmoss.com/payment/alipayCallback'/><input type='hidden' name='method' value='alipay.trade.page.pay'/><input type='hidden' name='version' value='1.0'/><input type='hidden' name='alipay_sdk' value='OpenAPI-Generator/3.0.0/PHP'/><input type='hidden' name='app_id' value='2021003155602183'/><input type='hidden' name='format' value='json'/><input type='hidden' name='timestamp' value='2025-07-01 16:57:10'/><input type='hidden' name='charset' value='UTF-8'/><input type='hidden' name='sign_type' value='RSA2'/><input type='hidden' name='app_cert_sn' value='e80df24d51a278f0e7715a787536382b'/><input type='hidden' name='alipay_root_cert_sn' value='687b59193f3f462dd5336e5abf83c5d8_02941eef3187dddf3d3b83462e1dfcf6'/><input type='hidden' name='sign' value='KVOffDdIyesH/Vxee8yvrcxdeLPF8L0y42CARXnzVWh/tddwU5Cvaf1PH2uSZKQWDGkHAOmryAoS+/9HwHDr/tvjFE2UTT0c4dpLu5HUWYufQet8FEKo2q6F6DRfmWdmh6U1y/j4cpD5Mi3aIlWD2SRCwS2D1OyT/WVgzpHEdtwNJuYil/PiEf6PfSJxCturA3c0PxO9jlfHjqUYXZ3c2XHe1Xaq4PDh3djOnemaBk6CIn6NrlI3Egc0yQ3vZAPE6QJbCHNwZWHiwgGLGVX3PtuZXQDYMF7zgGip+CInsdqoW/StQ12o+IJkGNCw3IzWLQmgFOEEURufmoBZS2C7WA=='/><input type='submit' value='ok' style='display:none;'></form><script>document.forms['alipaysubmit'].submit();</script>";

export const WECHAT_URL = 'weixin://wxpay/bizpayurl?pr=rl1YXjtz3';

export const AIRWALLEX_MAP = {
  currency: 'USD',
  customId: 'ys20250708205535360513',
  customerId: 'cus_hkpd5kmlmh84r72xqzx',
  intent_id: 'int_hkdmrgg2xh91tfdnwfq',
  clientSecret:
    'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NTIwNTE2NzMsImV4cCI6MTc1MjA1NTI3MywidHlwZSI6ImNsaWVudC1zZWNyZXQiLCJwYWRjIjoiSEsiLCJhY2NvdW50X2lkIjoiNzkzMTc3OTMtMjAxNC00ZjdkLTk5NDMtMTU3ZjdiODA4NTlhIiwiaW50ZW50X2lkIjoiaW50X2hrZG1yZ2cyeGg5MXRmZG53ZnEifQ.zvzFc6ZcF6XyVOK1S8zzpDjV4Jbk9J9Kbg1EqG9NK80',
};

export const AIRWALLEX_FULL_FEATURED_CARD_OPTIONS = {
  type: 'fullFeaturedCard',
  initOptions: {
    env: 'demo',
    locale: 'en',
  },
  options: {
    currency: AIRWALLEX_MAP.currency,
    intent: {
      id: AIRWALLEX_MAP.intent_id,
      client_secret: AIRWALLEX_MAP.clientSecret,
    },
    client_secret: AIRWALLEX_MAP.clientSecret,
  },
} as const;

export const AIRWALLEX_DROP_IN_OPTIONS = {
  type: 'dropIn',
  initOptions: {
    env: 'demo',
    locale: 'en',
  },
  options: {
    currency: AIRWALLEX_MAP.currency,
    // intent: {
    //   id: AIRWALLEX_MAP.intent_id,
    //   client_secret: AIRWALLEX_MAP.clientSecret,
    // },
    intent_id: AIRWALLEX_MAP.intent_id,
    client_secret: AIRWALLEX_MAP.clientSecret,
    applePayRequestOptions: { countryCode: 'US', buttonType: 'buy' },
    // googlePayRequestOptions: { countryCode: 'US', buttonType: 'buy' },
    methods: ['card', 'applepay'],
  },
} as const;

export const AIRWALLEX_APPLE_PAY_BUTTON_OPTIONS = {
  type: 'applePayButton',
  options: {
    intent_id: AIRWALLEX_MAP.intent_id,
    client_secret: AIRWALLEX_MAP.clientSecret,
    currency: AIRWALLEX_MAP.currency,
    applePayRequestOptions: { countryCode: 'US', buttonType: 'buy' },
  },
} as const;
