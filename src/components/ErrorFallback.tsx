import React from 'react';
import { Grid, Button, Typography } from 'voxeliface';

export type ErrorFallbackProps = {
	error: Error,
	resetErrorBoundary: () => void
};
export default function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
	return <Grid width="100%" height="100%" vertical alignItems="center" background="$primaryBackground" justifyContent="center">
		<Typography size={24} weight={700} lineheight={1.5}>
			<IconBiExclamationTriangleFill fontSize={32} style={{ margin: '0 12px' }}/>
			Crashed!
		</Typography>
		<Typography size={14} color="$secondaryColor" margin="12px 0 0" textalign="center">
			Looks like the application crashed unexpectedly...<br/>
			"{error.message}"
		</Typography>
		<Grid margin="1.5rem 0 0" spacing={8}>
			<Button theme="accent" onClick={() => location.reload()}>
				<IconBiArrowClockwise/>
				Reload Application
			</Button>
			<Button theme="secondary" onClick={() => resetErrorBoundary()}>
				<IconBiBack/>
				Quick Refresh
			</Button>
		</Grid>
	</Grid>;
}