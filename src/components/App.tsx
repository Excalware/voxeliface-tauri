import React from 'react';
import { getTheme } from 'voxeliface/lib/themes';
import ThemeContext from 'voxeliface/contexts/theme';
import { GridProps } from 'voxeliface/components/Grid';
import { Grid, Tooltip } from 'voxeliface';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback, { ErrorFallbackProps } from './ErrorFallback';
export type TauriAppProps = GridProps & {
	theme?: string,
	fallback?: React.FunctionComponent<ErrorFallbackProps>
};
export default function TauriApp({ css, theme = 'default', fallback, children, ...props }: TauriAppProps) {
	const Fallback = fallback ?? ErrorFallback;
	return <ThemeContext.Provider value={{ theme }}>
		<Grid width="100vw" height="100vh" className={getTheme(theme)} vertical {...props} css={{
			maxWidth: '100vw',
			minWidth: '100vw',
			overflow: 'hidden',
			maxHeight: '100vh',
			minHeight: '100vh',
			borderRadius: 8,
			...css
		}}>
			<ErrorBoundary
				FallbackComponent={({ error, resetErrorBoundary }) =>
					<Fallback error={error} resetErrorBoundary={resetErrorBoundary}/>
				}
			>
				<Tooltip.Provider>
					{children}
				</Tooltip.Provider>
			</ErrorBoundary>
		</Grid>
	</ThemeContext.Provider>;
};