import React, {useRef} from 'react';
import {
  IMonnifyCallbacks,
  IMonnifyConfig,
  IMonnifySuccessResponse,
  MonnifyCheckout,
  MonnifyForwardRef,
} from 'react-monnify';

function App() {
  const monnifyRef = useRef<MonnifyForwardRef>(null);
  const configs: IMonnifyConfig = {
    apiKey: 'MK_TEST_ZCNVBJYG8X',
    contractCode: '3316716973',
    mode: 'TEST', // TEST or LIVE
  };

  const callbacks: IMonnifyCallbacks = {
    onClose: (data) => {
      //Implement what should happen when the modal is closed here
      console.log('Payment Close => ', data);
    },
    onComplete: (response: IMonnifySuccessResponse) => {
      //Implement what happens when the transaction is completed.
      console.log('Payment Completed => ', response);
    },
    onLoadComplete: () => {
      console.log('SDK is UP');
    },
    onLoadStart: () => {
      console.log('loading has started');
    },
  };

  const handleInitializePayment = () => {
    monnifyRef.current?.initialize({
      amount: 500,
      customerFullName: 'Emmanuel Tochukwu',
      customerEmail: 'to.emmanuel93@gmail.com',
      paymentMethods: ['ACCOUNT_TRANSFER'],
      reference: '123456789',
      paymentDescription: 'Testing payment description',
      currency: 'NGN',
    });
  };

  return (
    <div>
      <MonnifyCheckout ref={monnifyRef} config={configs} callbacks={callbacks} />
      <button onClick={handleInitializePayment}>MAKE PAYMENT</button>

      {/* children */}
    </div>
  );
}

export default App;
