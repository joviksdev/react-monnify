import { IMonnifyInitiateProps, IMonnifyConfig, IMonnifyCallbacks } from './types';
export interface MonnifyForwardRef {
    initialize: (payload: IMonnifyInitiateProps) => void;
}
interface MonnifyProps extends React.RefAttributes<MonnifyForwardRef> {
    config: IMonnifyConfig;
    callbacks: IMonnifyCallbacks;
}
declare const MonnifyCheckout: import("react").ForwardRefExoticComponent<Omit<MonnifyProps, "ref"> & import("react").RefAttributes<MonnifyForwardRef>>;
export default MonnifyCheckout;
