export const PAYPAL_URL =
  'https://www.sandbox.paypal.com/checkoutnow?token=1DC53957W3446950R';

export const STRIPE_MAP = {
  clientSecret:
    'cs_test_a1Zm8mZ5qSHXxVN6IO108Hs3yHprjkjsbvLFowR2bYNOaSE79v1LZ4AoAm_secret_fidkdWxOYHwnPyd1blpxYHZxWjA0SmY3SUlONEJMNEROUTZfSnxHN0pxRGFTTjFiPTZgalxnf2lHSVxjZkpmYk9RTnY2NlBEXUNLaEBxUk1BM1FQbXNhZE1pd0RvY11kPHBKVVxyd2JoSjFvNTVOSVZEQWRGNCcpJ3BsSGphYCc%2FY2RpdmApJ2R1bE5gfCc%2FJ3VuWmlsc2BaMDRKZjdJSU40Qkw0RE5RNl9EPG08dWF3UFdoUzR0YDw8TWNUcz1GZGd0TktpNjFAblJWaUxfVTFqSHJIZ2c1cG5HTHBSNEhmTUl8QkxqZFJsd0FQQ2JMc101NUR3XFdxZGJjJykncGxIamFgJz8nYGhnYGFhYGEnKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGFsd2BmcUprRmpodWlgcWxqayc%2FJ2RpcmR8did4JSUl',
  stripeKey:
    'pk_test_51Oc2LLK1GI1AKT3ZOyB2OtAdVK4g83eoYbzlBLYfcOcgJTKs33UAXFNmEtWHD6TUhvdaHlrAjfXa9uOPYwrgmO4j00KLSADaC1',
};

export const PAYSSION_URL = 'https://www.payssion.com/pay/Z617665256173977';

export const ALIPAY_FORM_HTML_H5 =
  "<form id='alipaysubmit' name='alipaysubmit' action='https://openapi.alipay.com/gateway.do?charset=UTF-8' method='POST'><input type='hidden' name='biz_content' value='{\"subject\":\"FastMoss:专业版\",\"product_code\":\"QUICK_WAP_WAY\",\"body\":\"FastMoss:专业版\",\"out_trade_no\":\"yp20250618140923134623\",\"total_amount\":\"536\",\"timeout_express\":\"60m\"}'/><input type='hidden' name='notify_url' value='https://test.fastmoss.com/payment/alipayCallback'/><input type='hidden' name='return_url' value='https://mtest.fastmoss.com?order_id=fd20250618140923084000&pay_channel=6'/><input type='hidden' name='quit_url' value='https://test.fastmoss.com'/><input type='hidden' name='method' value='alipay.trade.wap.pay'/><input type='hidden' name='version' value='1.0'/><input type='hidden' name='alipay_sdk' value='OpenAPI-Generator/3.0.0/PHP'/><input type='hidden' name='app_id' value='2021003155602183'/><input type='hidden' name='format' value='json'/><input type='hidden' name='timestamp' value='2025-06-18 14:09:23'/><input type='hidden' name='charset' value='UTF-8'/><input type='hidden' name='sign_type' value='RSA2'/><input type='hidden' name='app_cert_sn' value='e80df24d51a278f0e7715a787536382b'/><input type='hidden' name='alipay_root_cert_sn' value='687b59193f3f462dd5336e5abf83c5d8_02941eef3187dddf3d3b83462e1dfcf6'/><input type='hidden' name='sign' value='TPCSsIpD/1dKoCpTzv2PJb0cI+vQ6cYZTCGwgvRLQwFBOOhZbQyJ8f2+m1w3iTA9tvvdn1ilc+9pC6c8MSXm6Tps5h02/ZTdUy5wx5/FNrnDrDUnJhQnXYYhRHwcG97H/6QaX6VXlOqFNQSrI9LxOq7PNEEWSe5RP5t4qZUGsDdKaC4Mtdw2KEpXW9g6szeiFjKa+c5pUCvXb1NOE3AXEraj81PA9iEnS07OLv0keFqGpV3vbZcLRoUecEmQkWZf2ojjrmtqvSenpD+YDO/a4Y5E2iMW0v9d4szGhv9f61B88FqcFCbI7sugEgLA2NRbCqs3WM+pDY8jZEDY3HWALQ=='/><input type='submit' value='ok' style='display:none;'></form><script>document.forms['alipaysubmit'].submit();</script>";

export const WECHAT_URL_H5 =
  'https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb?prepay_id=wx18173721064444f2d7e23123d930900000&package=2319663799&redirect_url=https%3A%2F%2Fmtest.fastmoss.com%2Fpages%2FuserCenter%2FmemberPrivilege%2Findex%3Fpay_channel%3Dwechat%26order_id%3Dfd20250618173720808453';

export const ALIPAY_FORM_HTML =
  "<form id='alipaysubmit' name='alipaysubmit' action='https://openapi.alipay.com/gateway.do?charset=UTF-8' method='POST'><input type='hidden' name='biz_content' value='{\"subject\":\"Relaxable™ Eye Massager with\",\"product_code\":\"FAST_INSTANT_TRADE_PAY\",\"body\":\"Relaxable™ Eye Massager with\",\"qr_pay_mode\":\"4\",\"integration_type\":\"PCWEB\",\"out_trade_no\":\"yp20250829190746076247\",\"total_amount\":\"7770\"}'/><input type='hidden' name='notify_url' value='https://test.fastmoss.com/payment/alipayMcCallback'/><input type='hidden' name='method' value='alipay.trade.page.pay'/><input type='hidden' name='version' value='1.0'/><input type='hidden' name='alipay_sdk' value='OpenAPI-Generator/3.0.0/PHP'/><input type='hidden' name='app_id' value='2021004159622841'/><input type='hidden' name='format' value='json'/><input type='hidden' name='timestamp' value='2025-08-29 19:07:46'/><input type='hidden' name='charset' value='UTF-8'/><input type='hidden' name='sign_type' value='RSA2'/><input type='hidden' name='app_cert_sn' value='dba6d207df4e60f90efdf8ec255d4628'/><input type='hidden' name='alipay_root_cert_sn' value='687b59193f3f462dd5336e5abf83c5d8_02941eef3187dddf3d3b83462e1dfcf6'/><input type='hidden' name='sign' value='Rb2ZpSO7RUmRUIyVGQ7ip1JfX9OLgYn17qTl0CRH6YeVfZAM/3AI+Up2F5zBUg/dRSTkKTjjRVNXkhie9oNovi5JsdzGjy+OSQjoDejqV6axniT863puJSAUZSVDZyFs6kDPG4kTA2kPKhMW2k9oDMxg3oPjgMUrWaD+oe/sm23OWQXYGfbhX67pQZ/ZFrU3GkNItho3MUdRf93cLHoJo62oO3LozQG3At4W8dsIUkV4Ad6Zyr1+5Izm05EbBdD015bcOdfL6of3rK3btn3Ic2xl4ZMrnlQBIISlKUnGKWQE8N2Oqb9TStF7BDaj10grr0NPDjGH+1wgzZBoPMQ4NQ=='/><input type='submit' value='ok' style='display:none;'></form><script>document.forms['alipaysubmit'].submit();</script>";
export const WECHAT_URL = 'weixin://wxpay/bizpayurl?pr=5SXwdTUz1';

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
