import {IMonnifyInitiateProps, IMonnifyProps} from './types';

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
    throw new Error('Unable to launch checkout');
  }

  let errors: string[] = [];

  !apiKey ? errors.push(Errors.ApiKey) : errors.splice(errors.indexOf(Errors.ApiKey), 1);
  !contractCode
    ? errors.push(Errors.ContractCode)
    : errors.splice(errors.indexOf(Errors.ContractCode), 1);

  if (errors.length > 0) {
    return new Error(`${errors.join(', ')} is invalid`);
  }

  if (/^\d+(\.\d{1,2})?$/.test(`${amount}`)) {
    return new Error('Invalid amount');
  }

  // setDisplay(true);
  (window as any).MonnifySDK.initialize({
    apiKey,
    contractCode,
    amount: amount,
    paymentMethods,
    ...payload,
  });
};
