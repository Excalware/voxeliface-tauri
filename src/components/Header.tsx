import React from 'react';
import { Header, HeaderProps } from 'voxeliface';

import WindowButtons from './WindowButtons';
export type TauriHeaderProps = HeaderProps;
export default function TauriHeader({ children, ...props }: TauriHeaderProps) {
    return <Header {...props}>
        <WindowButtons/>
        {children}
    </Header>;
};