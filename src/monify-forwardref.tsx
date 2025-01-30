import {forwardRef, useEffect, useImperativeHandle} from 'react';
import {IMonnifyInitiateProps, IMonnifyConfig, IMonnifyCallbacks} from './types';
import {monnifyCheckout} from './actions';

const MonifyForwardRef = (
  props: {config: IMonnifyConfig; callbacks: IMonnifyCallbacks},
  ref: React.Ref<any>,
) => {
  const config = props.config;
  const callbacks = props.callbacks;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.monnify.com/plugin/monnify.js';
    script.type = 'text/javascript';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup
    };
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      initialize: (payload: IMonnifyInitiateProps) => {
        monnifyCheckout({
          ...payload,
          ...config,
          ...callbacks,
        });
      },
    }),
    [],
  );

  return null;
};

export default forwardRef(MonifyForwardRef);
