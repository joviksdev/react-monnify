import {
	IMonnifyCallbacks,
	IMonnifyConfig,
	IMonnifySuccessResponse,
	useMonnifyCheckout,
} from 'react-monnify';
import './App.css';

function App() {
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
