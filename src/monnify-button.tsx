import React, {CSSProperties} from 'react';
import {ReactNode, useEffect} from 'react';
import {monnifyCheckout} from './actions';
import {IMonnifyProps} from './types';

interface Props extends IMonnifyProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const MonnifyButton = ({children, style, className, ...rest}: Props) => {
  useEffect(() => {
    if (document.getElementById('monnify-button')) {
      document.getElementById('monnify-button');
    }
    const script = document.createElement('script');
    script.src = 'https://sdk.monnify.com/plugin/monnify.js';
    script.type = 'text/javascript';
    script.async = true;
    script.id = 'monify-button';

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup
    };
  }, []);

  const initialize = () => {
    monnifyCheckout(rest);
  };

  return (
    <button className={className} style={style} onClick={initialize}>
      {children}
    </button>
  );
};

export default MonnifyButton;
