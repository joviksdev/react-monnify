import { useEffect } from 'react';

interface IInitialize {
	amount: number;
	currency: 'NGN';
	reference: string;
	customerFullName: string;
	customerEmail: string;
	paymentDescription: string;
	apiKey: string;
	contractCode: string;
	mode: 'TEST' | 'LIVE';
	paymentMethod: PaymentMethod[];
}

type STATUS = 'SUCCESS' | 'FAILED';

interface ISuccessResponse {
	authorizedAmount: number;
	message: string;
	paidOn: any;
	paymentReference: string;
	redirectUrl: any;
	status: STATUS;
	transactionReference: string;
}

type PaymentMethod = 'CARD' | 'ACCOUNT_TRANSFER' | 'USSD' | 'PHONE_NUMBER';

export const useMonifyCheckout = (props?: {
	onComplete?: (response: ISuccessResponse) => void;
}) => {
	const onComplete = props?.onComplete;

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

	const initialize = (payload: IInitialize) => {
		if (window === undefined) {
			throw new Error('Unable to launch checkout');
		}
		// setDisplay(true);
		(window as any).MonnifySDK.initialize({
			...payload,
			paymentMethods: ['CARD'],
			onLoadStart: () => {
				console.log('loading has started');
			},
			onLoadComplete: () => {
				console.log('SDK is UP');
			},
			onComplete: function (response: ISuccessResponse) {
				onComplete?.(response);
			},
			onClose: function (data: any) {
				console.log(data);
			},
		});
	};

	return { initialize };
};
