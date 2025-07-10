import React, {
  forwardRef,
  PropsWithChildren,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { loadAirwallex } from 'airwallex-payment-elements';
import { AirwallexProps } from './interface';
import { clientDocument, off, on } from '../utils/dom';

const Airwallex = forwardRef<HTMLElement, PropsWithChildren<AirwallexProps>>(
  (props, ref) => {
    const {
      type = 'fullFeaturedCard',
      options,
      initOptions,
      style,
      onReady: propsOnReady,
      onSuccess: propsOnSuccess,
      onError: propsOnError,
      ...others
    } = props;

    const airwallexRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => airwallexRef.current as HTMLElement);

    useEffect(() => {
      loadAirwallex({
        env: 'demo',
        ...initOptions,
      }).then((airwallex) => {
        if (airwallex) {
          const cardElement = airwallex.createElement(type, options);
          if (cardElement) {
            cardElement.mount(type);
          }
        }
      });
    }, [options, type, initOptions]);

    useEffect(() => {
      const el = clientDocument?.getElementById(type);

      const onReady = (event: any) => {
        propsOnReady?.(event);
      };

      const onSuccess = (event: any) => {
        propsOnSuccess?.(event);
      };

      const onError = (event: any) => {
        propsOnError?.(event);
      };

      if (el) {
        on(el, 'onReady', onReady);
        on(el, 'onSuccess', onSuccess);
        on(el, 'onError', onError);
      }

      return () => {
        if (el) {
          off(el, 'onReady', onReady);
          off(el, 'onSuccess', onSuccess);
          off(el, 'onError', onError);
        }
      };
    }, [type, propsOnReady, propsOnSuccess, propsOnError]);

    return (
      <div
        ref={airwallexRef}
        id={String(type)}
        style={{ width: '100%', ...style }}
        {...others}
      ></div>
    );
  }
);

Airwallex.displayName = 'Airwallex';

export default React.memo(Airwallex);
