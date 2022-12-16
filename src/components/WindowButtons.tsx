import React from 'react';
import { exit } from '@tauri-apps/api/process';
import { styled } from '@stitches/react';
import { appWindow } from '@tauri-apps/api/window';

import { Grid } from 'voxeliface';
const StyledWindowButtons = styled(Grid, {
    height: '100%'
});

const WindowButtonComponent = styled('button', {
    color: '$secondaryColor',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    fontSize: 16,
    background: 'none',

    '&:hover': {
        color: '$primaryColor'
    },
    '& svg': {
        width: 12,
        height: 12
    },
    '& path': {
        transition: 'fill, stroke 0.2s'
    }
});

export default function WindowButtons() {
    const close = () => exit();
    const minimize = () => appWindow.minimize();
    const maximize = () => appWindow.toggleMaximize();
    return <StyledWindowButtons spacing={24} direction="horizontalReverse" alignItems="center">
		<WindowButtonComponent onClick={close} css={{
			'& path': { stroke: '$secondaryColor' },
			'&:hover': {
				'& path': { stroke: '$primaryColor' }
			}
		}}>
			<svg width="16" height="16" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clipPath="url(#clip0_606_110)">
					<path d="M0.5 0.5L7.5 7.5M7.5 0.5L0.5 7.5" stroke="white" strokeLinecap="round"/>
				</g>
				<defs>
					<clipPath id="clip0_606_110">
						<rect width="8" height="8" fill="white"/>
					</clipPath>
				</defs>
			</svg>
		</WindowButtonComponent>
		<WindowButtonComponent onClick={maximize} css={{
			'& path': { fill: '$secondaryColor' },
			'&:hover': {
				'& path': { fill: '$primaryColor' }
			}
		}}>
			<svg width="16" height="16" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_606_112)">
					<path fillRule="evenodd" clipRule="evenodd" d="M0 7V3C0 2.44772 0.447715 2 1 2H5C5.55228 2 6 2.44772 6 3V7C6 7.55228 5.55228 8 5 8H1C0.447715 8 0 7.55228 0 7ZM5 3.5C5 3.22386 4.77614 3 4.5 3H1.5C1.22386 3 1 3.22386 1 3.5V6.5C1 6.77614 1.22386 7 1.5 7H4.5C4.77614 7 5 6.77614 5 6.5V3.5Z" fill="white"/>
					<path d="M6 0H2C1.44772 0 1 0.447715 1 1H6C6.55228 1 7 1.44772 7 2V7C7.55228 7 8 6.55228 8 6V2C8 0.895431 7.10457 0 6 0Z" fill="white"/>
				</g>
				<defs>
					<clipPath id="clip0_606_112">
						<rect width="8" height="8" fill="white"/>
					</clipPath>
				</defs>
			</svg>
		</WindowButtonComponent>
		<WindowButtonComponent onClick={minimize} css={{
			'& path': { stroke: '$secondaryColor' },
			'&:hover': {
				'& path': { stroke: '$primaryColor' }
			}
		}}>
			<svg width="16" height="16" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 4H8" stroke="white" strokeWidth="2"/>
			</svg>
		</WindowButtonComponent>
	</StyledWindowButtons>;
}