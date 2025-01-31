import {forwardRef, useEffect, useImperativeHandle} from 'react';
import {IMonnifyInitiateProps, IMonnifyConfig, IMonnifyCallbacks} from './types';
import {monnifyCheckout} from './actions';

export interface MonnifyForwardRef {
  initialize: (payload: IMonnifyInitiateProps) => void;
}

interface MonnifyProps {
  config: IMonnifyConfig;
  callbacks: IMonnifyCallbacks;
}

const MonnifyCheckout = ({config, callbacks}: MonnifyProps, ref: any) => {
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
      document.body.removeChild(script);
    };
  }, []);

  // ✅ Correctly handle `ref` using `useImperativeHandle`
  useImperativeHandle(ref, () => ({
    initialize: (payload: IMonnifyInitiateProps) => {
      monnifyCheckout({
        ...payload,
        ...config,
        ...callbacks,
      });
    },
  }));

  return null; // This component doesn't render anything
};

// ✅ Fix ESLint warning: Add a display name
MonnifyCheckout.displayName = 'MonnifyCheckout';

export default forwardRef<MonnifyForwardRef, MonnifyProps>(MonnifyCheckout);
