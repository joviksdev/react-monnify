import { IMonnifyInitiateProps, IMonnifyConfig, IMonnifyCallbacks } from './types';
export interface MonnifyForwardRef {
    initialize: (payload: IMonnifyInitiateProps) => void;
}
interface MonnifyProps {
    config: IMonnifyConfig;
    callbacks: IMonnifyCallbacks;
}
declare const MonnifyCheckout: import("react").ForwardRefExoticComponent<MonnifyProps & import("react").RefAttributes<MonnifyForwardRef>>;
export default MonnifyCheckout;
