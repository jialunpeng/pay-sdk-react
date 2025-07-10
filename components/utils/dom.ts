const NOOP = () => {};

export const isServerRendering = (function () {
  try {
    return !(typeof window !== 'undefined' && document !== undefined);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return true;
  }
})();

export const clientWindow = (function () {
  if (isServerRendering) {
    return undefined;
  }
  return window;
})();

export const clientDocument = (function () {
  if (isServerRendering) {
    return undefined;
  }
  return document;
})();

export const localStorage = (function () {
  if (isServerRendering) {
    return NOOP;
  }
  return window.localStorage;
})();

export const location = (function () {
  if (isServerRendering) {
    return NOOP;
  }
  return function (action: keyof Location, value?: any) {
    if (action === 'replace') {
      window.location.replace(value);
    }
    if (action === 'href') {
      window.location.href = value;
    }
    if (action === 'reload') {
      window.location.reload();
    }
    if (action === 'protocol') {
      return window.location.protocol;
    }
    if (action === 'host') {
      return window.location.host;
    }
    if (action === 'search') {
      return window.location.search ?? '';
    }
  };
})();

export const open = (function () {
  if (isServerRendering) {
    return NOOP;
  }
  return function (url: string, target: string = '_blank') {
    window.open(url, target);
  };
})();

export const on = (function () {
  if (isServerRendering) {
    return NOOP;
  }
  return function (
    element: EventTarget | null,
    event: string,
    handler: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    element && element.addEventListener(event, handler, options || false);
  };
})();

export const off = (function () {
  if (isServerRendering) {
    return NOOP;
  }
  return function (
    element: EventTarget | null,
    event: string,
    handler: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    element && element.removeEventListener(event, handler, options || false);
  };
})();
