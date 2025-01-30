import {forwardRef, useEffect, useImperativeHandle} from 'react';
import {IMonnifyInitiateProps, IMonnifyConfig, IMonnifyCallbacks} from './types';
import {monnifyCheckout} from './actions';

export interface MonnifyForwardRef {
  initialize: (payload: IMonnifyInitiateProps) => void;
}

const MonnifyCheckout = (
  props: {config: IMonnifyConfig; callbacks: IMonnifyCallbacks},
  ref: any,
) => {
  const config = props.config;
  const callbacks = props.callbacks;

  useEffect(() => {
    if (document.getElementById('monnify-forwardref')) {
      document.getElementById('monnify-forwardref');
    }
    const script = document.createElement('script');
    script.src = 'https://sdk.monnify.com/plugin/monnify.js';
    script.type = 'text/javascript';
    script.async = true;
    script.id = 'monnify-forward';

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

export default forwardRef(MonnifyCheckout);
