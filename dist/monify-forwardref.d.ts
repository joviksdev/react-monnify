import { IMonnifyInitiateProps, IMonnifyConfig, IMonnifyCallbacks } from './types';
export interface MonnifyForwardRef {
    initialize: (payload: IMonnifyInitiateProps) => void;
}
declare const _default: import("react").ForwardRefExoticComponent<{
    config: IMonnifyConfig;
    callbacks: IMonnifyCallbacks;
} & import("react").RefAttributes<unknown>>;
export default _default;
