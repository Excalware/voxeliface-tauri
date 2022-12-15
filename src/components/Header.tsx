import React from 'react';

import WindowButtons from './WindowButtons';
import Header, { HeaderProps } from 'voxeliface/components/Header';
export type TauriHeaderProps = HeaderProps;
export default function TauriHeader({ children, ...props }: TauriHeaderProps) {
    return <Header {...props}>
        <WindowButtons/>
        {children}
    </Header>;
};