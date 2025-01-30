import { IMonnifyCallbacks, IMonnifyConfig, IMonnifyInitiateProps } from './types';
declare const useMonifyCheckout: ({ callbacks, configs, }: {
    callbacks?: IMonnifyCallbacks;
    configs: IMonnifyConfig;
}) => {
    initialize: (payload: IMonnifyInitiateProps) => void;
};
export default useMonifyCheckout;
