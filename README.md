# react-monnify-sdk

This is a react library for implementing Monnify payment gateway

<!-- ## Demo

![Demo](React_App_01.png?raw=true 'Demo Image') -->

## Get Started

This React library provides a wrapper to add Monnify Payments to your React application

### Install

```sh
npm install react-monnify-sdk --save
```

or with `yarn`

```sh
yarn add react-monnify-sdk
```

### Usage

This library can be implemented into any react application in 3 different ways:

1. By using a imperative forward component,
1. Hooks provided by the library, and
1. button.

Note that The implementations produce the same results.

### 1. Using the imperative Monnify forward component

```
import React, { useRef } from 'react';
import {
	IMonnifyCallbacks,
	IMonnifyConfig,
	IMonnifySuccessResponse,
	MonnifyCheckout,
	MonnifyForwardRef,
} from 'react-monnify-sdk';
import './App.css';

function App() {
	const monnifyRef = useRef<MonnifyForwardRef>(null);
	const configs: IMonnifyConfig = {
		apiKey: 'MK_TEST_........',
		contractCode: '1234567890',
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
			<MonnifyCheckout
				ref={monnifyRef}
				config={configs}
				callbacks={callbacks}
			/>
			<button onClick={handleInitializePayment}>MAKE PAYMENT</button>

			{/* children */}
		</div>
	);
}

export default App;

```

### 2. Using the monnify hook

```
import {
IMonnifyCallbacks,
IMonnifyConfig,
IMonnifySuccessResponse,
useMonnifyCheckout,
} from 'react-monnify-sdk';
import './App.css';

function App() {
const configs: IMonnifyConfig = {
apiKey: 'MK*TEST*........',
contractCode: '1234567890',
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

    const { initialize } = useMonnifyCheckout({
    	configs,
    	callbacks,
    });

    return (
    	<div>
    		<button
    			onClick={() => {
    				initialize({
    					amount: 500,
    					customerFullName: 'Emmanuel Tochukwu',
    					customerEmail: 'to.emmanuel93@gmail.com',
    					paymentMethods: ['ACCOUNT_TRANSFER'],
    					reference: '123456789',
    					paymentDescription: 'Testing payment description',
    					currency: 'NGN',
    				});
    			}}
    		>
    			MAKE PAYMENT
    		</button>

    		{/* children */}
    	</div>
    );

}

export default App;
```

### 2. Using the Monnify button

```
import { IMonnifySuccessResponse, MonnifyButton } from 'react-monnify-sdk';
import './App.css';

function App() {
	return (
		<MonnifyButton
			apiKey='MK_TEST_........'
			amount={500}
			customerEmail='to.emmanuel93@gmail.com'
			contractCode='1234567890'
			paymentMethods={['ACCOUNT_TRANSFER']}
			customerFullName='Emmanuel Tochukwu'
			reference='123456789'
			paymentDescription='Testing payment description'
			currency='NGN'
			onClose={(data) => {
				//Implement what should happen when the modal is closed here
				console.log('Payment Close => ', data);
			}}
			onComplete={(response: IMonnifySuccessResponse) => {
				//Implement what happens when the transaction is completed.
				console.log('Payment Completed => ', response);
			}}
			onLoadComplete={() => {
				console.log('SDK is UP');
			}}
			onLoadStart={() => {
				console.log('loading has started');
			}}
		>
				MAKE PAYMENT
		</MonnifyButton>
	);
}

export default App;

```

If you want to style Monnify button, you have the option to use `className` or `style`

### Props

Common props you may want to specify include:

- **amount `(Float(required))`** :- The amount(in Naira) to be paid, minimum is N20
- **customerName `(String(required))`** :- The name of the customer
- **customerEmail `(String(required))`** :- The customer email
- **paymentReference `String(required)`** :- A unique string of characters that identifies each transaction
- **paymentDescription `(String(required))`** :- A description of the payment
- **currencyCode `(String)`** - The currency code
- **contractCode `String(required)`** :- The merchant contract code
- **paymentMethods `(String)`** :- The method of payment collection, one of `CARD, ACCOUNT_TRANSFER, USSD, or PHONE_NUMBER`, default to `CARD and ACCOUNT_TRANSFER`
- **incomeSplitConfig `List<IncomeSplitConfig>`** :- A way to split payments among subAccounts. IncomeSplitConfig `{ String subAccountCode; Float feePercentage; Float splitPercentage; Float splitAmount; Boolean feeBearer; }`
- **metaData `Map<String,Object>`** :- This field can be used to pass extra information from customers

Please checkout [monnify Documentation](https://developers.monnify.com/docs/collections/one-time-payment) for other available options you can add to the tag

### Methods

- **onLoadStart**: `() => void`;
- **onLoadComplete**: `() => void`;
- **onComplete**: `(response: IMonnifySuccessResponse) => void`;
- **onClose**: `(data) => void`;

## Thanks

Why not give the GitHub repo a star? I'd really appreciate the attention! Also, feel free to share the repository link on Twitter or any social media platform. Let's spread the word!

If you like React Monnify SDK, you should [follow me on X](https://x.com/iem_joviks), and [LinkedIn](https://www.linkedin.com/in/emmanuel-j-tochukwu-671447125)!

Thanks!
Emmanuel Tochukwu.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

```

```
