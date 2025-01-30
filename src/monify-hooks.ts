import {useEffect} from 'react';
import {IMonnifyCallbacks, IMonnifyConfig, IMonnifyInitiateProps} from './types';
import {monnifyCheckout} from './actions';

const useMonifyCheckout = ({
  callbacks,
  configs,
}: {
  callbacks?: IMonnifyCallbacks;
  configs: IMonnifyConfig;
}) => {
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

  const initialize = (payload: IMonnifyInitiateProps) => {
    monnifyCheckout({
      ...payload,
      ...configs,
      ...callbacks,
    });
  };

  return {initialize};
};

export default useMonifyCheckout;
