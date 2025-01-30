interface IMonnifyProps {
	amount: number;
	currency: 'NGN';
	reference: string;
	customerFullName: string;
	customerEmail: string;
	apiKey: string;
	contractCode: string;
	paymentDescription: string;
	metadata?: { [key: string]: any };
	incomeSplitConfig?: { [key: string]: any }[];
	onLoadStart?: () => void;
	onLoadComplete?: () => void;
	onComplete?: (response: IMonnifySuccessResponse) => void;
	onClose?: (data: any) => void;
}

type PaymentMethod = 'CARD' | 'ACCOUNT_TRANSFER' | 'USSD' | 'PHONE_NUMBER';

type STATUS = 'SUCCESS' | 'FAILED';

interface IMonnifySuccessResponse {
	authorizedAmount: number;
	message: string;
	paidOn?: string;
	paymentReference: string;
	redirectUrl?: string;
	status: STATUS;
	transactionReference: string;
}

interface IMonifyCancelResponse {
	authorizedAmount: number;
	paymentStatus: string | 'USER_CANCELLED';
	redirectUrl: null | string;
	responseCode: string | 'USER_CANCELLED';
	responseMessage: string;
}
