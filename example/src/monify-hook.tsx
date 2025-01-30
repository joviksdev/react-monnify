import { IMonnifySuccessResponse, MonnifyButton } from 'react-monnify';
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
			Make Payment
		</MonnifyButton>
	);
}

export default App;
