import {forwardRef, useEffect, useImperativeHandle} from 'react';
import {IMonnifyInitiateProps, IMonnifyConfig, IMonnifyCallbacks} from './types';
import {monnifyCheckout} from './actions';

// ✅ Define the ref interface correctly
export interface MonnifyForwardRef {
  initialize: (payload: IMonnifyInitiateProps) => void;
}

// ✅ Define the component props
interface MonnifyProps {
  config: IMonnifyConfig;
  callbacks: IMonnifyCallbacks;
}

// ✅ Fix: Explicitly type `forwardRef`
const MonnifyCheckout = forwardRef<MonnifyForwardRef, MonnifyProps>(function MonnifyCheckout(
  {config, callbacks},
  ref,
) {
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
});

// ✅ Fix ESLint warning: Add a display name
MonnifyCheckout.displayName = 'MonnifyCheckout';

export default MonnifyCheckout;
