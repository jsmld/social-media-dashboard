import React from 'react';
import { styled } from '@mui/material/styles';
import { Switch, SwitchProps } from '@mui/material';

const ThemeSwitch = styled((props: SwitchProps) => (
	<Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
	width: 52,
	height: 26,
	padding: 0,
	'& .MuiSwitch-switchBase': {
		padding: 0,
		margin: 2,
		transitionDuration: '300ms',
		'&.Mui-checked': {
			transform: 'translateX(26px)',
			color: '#fff',
			'& + .MuiSwitch-track': {
				background: theme.palette.mode === 'dark' ? '#fff' : 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
				opacity: 1,
				border: 0,
			},
			'&.Mui-disabled + .MuiSwitch-track': {
				opacity: 0.5,
			},
		},
		'&.Mui-focusVisible .MuiSwitch-thumb': {
			color: '#33cf4d',
			border: '6px solid #fff',
		},
		'&.Mui-disabled .MuiSwitch-thumb': {
			color:
        theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
		},
		'&.Mui-disabled + .MuiSwitch-track': {
			opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
		},
	},
	'& .MuiSwitch-thumb': {
		boxSizing: 'border-box',
		width: 22,
		height: 22,
	},
	'& .MuiSwitch-track': {
		borderRadius: 26 / 2,
		background: theme.palette.mode === 'light' ? 'hsl(230, 22%, 74%)' : '#fff',
		opacity: 1,
		transition: theme.transitions.create(['background-color'], {
			duration: 700,
		}),
	},
}));

export default ThemeSwitch;
