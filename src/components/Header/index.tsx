import React from 'react';
import { Box, Typography } from '@mui/material';
import ThemeSwitch from '../ThemeSwitch';

const Header: React.FC = () => {
	return (
		<Box display='flex' justifyContent='space-between' pt={5} pb={25}>
			<Box>
				<Typography component='h1' fontSize='1.75rem' fontWeight={900}>Social Media Dashboard</Typography>
				<Typography component='h2' fontSize='0.9rem' fontWeight={700} color='text.disabled'>Total Followers: 23,004</Typography>
			</Box>
			<Box display='flex' flexDirection='row' alignItems='center'>
				<Typography component='h2' fontSize='0.9rem' fontWeight={700} color='text.disabled' pr={1}>Dark Mode</Typography>
				<ThemeSwitch />
			</Box>
		</Box>
	);
};

export default Header;
