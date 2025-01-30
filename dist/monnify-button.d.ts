import React, { CSSProperties } from 'react';
import { ReactNode } from 'react';
import { IMonnifyProps } from './types';
interface Props extends IMonnifyProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}
declare const MonnifyButton: ({ children, style, className, ...rest }: Props) => React.JSX.Element;
export default MonnifyButton;
