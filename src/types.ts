export interface IMonnifyProps extends IMonnifyInitiateProps {
  apiKey: string;
  contractCode: string;
  mode?: MonnifyEnvMode;
  onLoadStart?: () => void;
  onLoadComplete?: () => void;
  onComplete?: (response: IMonnifySuccessResponse) => void;
  onClose?: (data: any) => void;
}

export interface IMonnifyInitiateProps {
  amount: number;
  currency: 'NGN';
  paymentMethods?: PaymentMethod[];
  reference: string;
  customerFullName: string;
  customerEmail: string;
  paymentDescription: string;
  metadata?: {[key: string]: any};
  incomeSplitConfig?: {[key: string]: any}[];
}

export type MonnifyEnvMode = 'TEST' | 'LIVE';

export interface IMonnifyConfig {
  apiKey: string;
  contractCode: string;
  mode?: MonnifyEnvMode;
}

export interface IMonnifyCallbacks {
  onLoadStart?: () => void;
  onLoadComplete?: () => void;
  onComplete?: (response: IMonnifySuccessResponse) => void;
  onClose?: (data: any) => void;
}

export type PaymentMethod = 'CARD' | 'ACCOUNT_TRANSFER' | 'USSD' | 'PHONE_NUMBER';

type STATUS = 'SUCCESS' | 'FAILED';

export interface IMonnifySuccessResponse {
  authorizedAmount: number;
  message: string;
  paidOn?: string;
  paymentReference: string;
  redirectUrl?: string;
  status: STATUS;
  transactionReference: string;
}

export interface IMonifyCancelResponse {
  authorizedAmount: number;
  paymentStatus: string | 'USER_CANCELLED';
  redirectUrl: null | string;
  responseCode: string | 'USER_CANCELLED';
  responseMessage: string;
}
