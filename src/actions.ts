import {IMonifyCancelResponse, IMonnifyProps, IMonnifySuccessResponse} from './types';

enum Errors {
  ApiKey = 'API key',
  ContractCode = 'Contract Code',
}

export const monnifyCheckout = ({
  paymentMethods = ['CARD', 'ACCOUNT_TRANSFER'],
  amount,
  apiKey,
  contractCode,
  ...payload
}: IMonnifyProps) => {
  if (window === undefined) {
    console.error('Unable to launch checkout');
    return;
  }

  const onLoadStart = payload?.onLoadStart;
  const onLoadComplete = payload?.onLoadComplete;
  const onComplete = payload?.onComplete;
  const onClose = payload?.onClose;

  const errors: string[] = [];

  if (!apiKey) {
    errors.push(Errors.ApiKey);
  } else {
    errors.splice(errors.indexOf(Errors.ApiKey), 1);
  }

  if (!contractCode) {
    errors.push(Errors.ContractCode);
  } else {
    errors.splice(errors.indexOf(Errors.ContractCode), 1);
  }

  if (errors.length > 0) {
    console.error(`${errors.join(', ')} is invalid`);
    return;
  }

  if (!/^\d+(\.\d{1,2})?$/.test(`${amount}`)) {
    console.error('Invalid amount');
    return;
  }

  // setDisplay(true);
  (window as any).MonnifySDK.initialize({
    apiKey,
    contractCode,
    amount,
    paymentMethods,
    onClose: (data: IMonifyCancelResponse) => {
      onClose?.(data);
    },
    onLoadStart: () => {
      onLoadStart?.();
    },
    onLoadComplete: () => {
      onLoadComplete?.();
    },
    onComplete: (response: IMonnifySuccessResponse) => {
      onComplete?.(response);
    },
    ...payload,
  });
  return;
};
