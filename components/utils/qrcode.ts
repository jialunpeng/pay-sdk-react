import QRCode from 'qrcode';

/**
 * 根据入参生成一个二维码
 * @param url 要生成二维码的url
 * @returns Promise
 */
const makeQrcode = (url: string) => {
  return new Promise<string>((resolve, reject) => {
    QRCode.toDataURL(url)
      .then((qrcodeUrl: string) => {
        resolve(qrcodeUrl);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};

export default makeQrcode;
