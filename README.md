# react-monnify

This is a react library for implementing monnify payment gateway

## Demo

![Demo](React_App_01.png?raw=true 'Demo Image')

## Get Started

This React library provides a wrapper to add monnify Payments to your React application

### Install

```sh
npm install react-monnify --save
```

or with `yarn`

```sh
yarn add react-monnify
```

### Usage

This library can be implemented into any react application in 3 different ways:

1. By using hooks provided by the library
2. By using a button provided by the library
3. By using a context consumer provided by the library

Note that all 3 implementations produce the same results.

### 1. Using the monnify hook

```javascript
import React from 'react';
import logo from './logo.svg';
import { usemonnifyPayment } from 'react-monnify';
import './App.css';

const config = {
	reference: new Date().getTime().toString(),
	email: 'user@example.com',
	amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
	publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
};

// you can call this function anything
const onSuccess = (reference) => {
	// Implementation for whatever you want to do with reference and after success call.
	console.log(reference);
};

// you can call this function anything
const onClose = () => {
	// implementation for  whatever you want to do when the monnify dialog closed.
	console.log('closed');
};

const monnifyHookExample = () => {
	const initializePayment = usemonnifyPayment(config);
	return (
		<div>
			<button
				onClick={() => {
					initializePayment(onSuccess, onClose);
				}}
			>
				monnify Hooks Implementation
			</button>
		</div>
	);
};

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
			<monnifyHookExample />
		</div>
	);
}

export default App;
```

### 2. Using the monnify button

```javascript
import React from 'react';
import logo from './logo.svg';
import { monnifyButton } from 'react-monnify';
import './App.css';

const config = {
	reference: new Date().getTime().toString(),
	email: 'user@example.com',
	amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
	publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
};

function App() {
	// you can call this function anything
	const handlemonnifySuccessAction = (reference) => {
		// Implementation for whatever you want to do with reference and after success call.
		console.log(reference);
	};

	// you can call this function anything
	const handlemonnifyCloseAction = () => {
		// implementation for  whatever you want to do when the monnify dialog closed.
		console.log('closed');
	};

	const componentProps = {
		...config,
		text: 'monnify Button Implementation',
		onSuccess: (reference) => handlemonnifySuccessAction(reference),
		onClose: handlemonnifyCloseAction,
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
			<monnifyButton {...componentProps} />
		</div>
	);
}

export default App;
```

### 3. using the monnify consumer

```Javascript
import React from 'react';
import logo from './logo.svg';
import { monnifyConsumer } from 'react-monnify';
import './App.css';

  const config = {
      reference: (new Date()).getTime().toString(),
      email: "user@example.com",
      amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
      publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
  };

  // you can call this function anything
  const handleSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handleClose = () => {
    // implementation for  whatever you want to do when the monnify dialog closed.
    console.log('closed')
  }

  function App() {
      const componentProps = {
          ...config,
          text: 'monnify Button Implementation',
          onSuccess: (reference) => handleSuccess(reference),
          onClose: handleClose
      };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <monnifyConsumer {...componentProps} >
          {({initializePayment}) => <button onClick={() => initializePayment(handleSuccess, handleClose)}>monnify Consumer Implementation</button>}
        </monnifyConsumer>
      </div>
    );
  }

  export default App;
```

### Sending Metadata with Transaction

If you want to send extra metadata e.g. Transaction description, user that made the transaction. Edit your config like so:

```ts
const config = {
	// Your required fields
	metadata: {
		custom_fields: [
			{
				display_name: 'description',
				variable_name: 'description',
				value: 'Funding Wallet',
			},
			// To pass extra metadata, add an object with the same fields as above
		],
	},
};
```

Please checkout [monnify Documentation](https://developers.monnify.co/docs/monnify-inline) for other available options you can add to the tag

## Deployment

REMEMBER TO CHANGE THE KEY WHEN DEPLOYING ON A LIVE/PRODUCTION SYSTEM

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Some commit message'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request 😉😉

## How can I thank you?

Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter or Any Social Media? Spread the word!

Don't forget to [follow me on twitter](https://twitter.com/iamraphson)!

Thanks!
Olusegun Ayeni.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
