import { isValidElement } from 'react';
import { canUseDom } from './can-use-dom';
import { clientWindow } from './dom';

const opt = Object.prototype.toString;

export function isArray(obj: any): obj is any[] {
  return opt.call(obj) === '[object Array]';
}

export function isObject(obj: any): obj is { [key: string]: any } {
  return opt.call(obj) === '[object Object]';
}

export function isString(obj: any): obj is string {
  return opt.call(obj) === '[object String]';
}

export function isNumber(obj: any): obj is number {
  return opt.call(obj) === '[object Number]' && obj === obj;
}

export function isRegExp(obj: any) {
  return opt.call(obj) === '[object RegExp]';
}

export function isFile(obj: any): obj is File {
  return opt.call(obj) === '[object File]';
}

export function isBlob(obj: any): obj is Blob {
  return opt.call(obj) === '[object Blob]';
}

function isHex(color: string) {
  return /^#[a-fA-F0-9]{3}$|#[a-fA-F0-9]{6}$/.test(color);
}

function isRgb(color: string) {
  return /^rgb\((\s*\d+\s*,?){3}\)$/.test(color);
}

function isRgba(color: string) {
  return /^rgba\((\s*\d+\s*,\s*){3}\s*\d(\.\d+)?\s*\)$/.test(color);
}
export function isColor(color: string): boolean {
  return isHex(color) || isRgb(color) || isRgba(color);
}
export function isUndefined(obj: any): obj is undefined {
  return obj === undefined;
}

export function isNull(obj: any): obj is null {
  return obj === null;
}

export function isNullOrUndefined(obj: any): boolean {
  return obj === null || obj === undefined;
}

export function isFunction(obj: any): obj is (...args: any[]) => any {
  return typeof obj === 'function';
}

export function isEmptyObject(obj: any): boolean {
  return isObject(obj) && Object.keys(obj).length === 0;
}

export function isEmptyReactNode(content: any, trim?: boolean): boolean {
  if (content === null || content === undefined || content === false) {
    return true;
  }
  if (
    typeof content === 'string' &&
    (trim ? content.trim() === '' : content === '')
  ) {
    return true;
  }
  return false;
}

export function isExist(obj: any): boolean {
  return obj || obj === 0;
}

export function isWindow(el: any): el is Window {
  return el === window;
}

export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}

export const isReactComponent = (element: any): boolean => {
  return (
    element && isValidElement(element) && typeof element.type === 'function'
  );
};

export const isClassComponent = (element: any): boolean => {
  return (
    isReactComponent(element) && !!element.type.prototype?.isReactComponent
  );
};

// element 是合成的 dom 元素或者字符串，数字等
export const isDOMElement = (element: any): boolean => {
  return isValidElement(element) && typeof element.type === 'string';
};

export const isLink = (text?: React.ReactNode) => {
  return (
    isString(text) && (text.startsWith('http') || text.startsWith('https'))
  );
};

export async function isImageLinkAvailable(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

/**
 * @zh 检测是否为移动设备
 * @en Detect if it's a mobile device
 */
export function isMobileDevice() {
  return (
    clientWindow &&
    /Android|webOS|iPhone|iPad|iPod|Windows Phone|BlackBerry|Mobile|IEMobile|Opera Mini/i.test(
      clientWindow?.navigator.userAgent
    )
  );
}
/**
 * @zh 检测是否为触摸设备
 * @en Detect if it's a touch device
 */
export function isTouchDevice(): boolean {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

export function isEmail(email: string) {
  const emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return emailReg.test(email);
}

export function isSmsCode(code: string) {
  const codeReg = /\d{6}/;
  return codeReg.test(code);
}

export function isUsPhoneNumber(phone: string) {
  const phoneRegex = /^[2-9]\d{2}[2-9]\d{6}$/;
  return phoneRegex.test(phone);
}

export function isPromise(obj: unknown): obj is Promise<unknown> {
  return (
    !!obj && typeof obj === 'object' && typeof (obj as any).then === 'function'
  );
}

/**
 * 判断是否为Android设备
 * @returns 是否为Android设备
 */
export function isAndroid(): boolean {
  return canUseDom ? /android/.test(navigator.userAgent.toLowerCase()) : false;
}

export function isIOS(): boolean {
  return canUseDom
    ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
    : false;
}
