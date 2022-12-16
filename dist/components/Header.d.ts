import { HeaderProps } from 'voxeliface';

type TauriHeaderProps = HeaderProps;
declare function TauriHeader({ children, ...props }: TauriHeaderProps): JSX.Element;

export { TauriHeaderProps, TauriHeader as default };
