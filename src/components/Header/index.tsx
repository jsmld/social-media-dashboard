import React from 'react';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import ThemeSwitch from '../ThemeSwitch';

const Header: React.FC = () => {
	const desktop = useMediaQuery('(min-width: 600px)');
	return (
		<Stack direction={desktop ? 'row' : 'column'} justifyContent='space-between' spacing={desktop ? 0 : 4} pt={5} pb={6}>
			<Box>
				<Typography component='h1' fontSize='1.75rem' fontWeight={900} color='#1e202a'>Social Media Dashboard</Typography>
				<Typography component='h2' fontSize='0.9rem' fontWeight={700} color='#63687e'>Total Followers: 23,004</Typography>
			</Box>
			<Box display='flex' flexDirection='row' alignItems='center' justifyContent={desktop ? 'normal' : 'space-between'}>
				<Typography component='h2' fontSize='0.9rem' fontWeight={700} color='#63687e' pr={1}>Dark Mode</Typography>
				<ThemeSwitch />
			</Box>
		</Stack>
	);
};

export default Header;
