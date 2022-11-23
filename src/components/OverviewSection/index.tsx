import { Box, Typography } from '@mui/material';
import React from 'react';
import OverviewCardContainer from '../OverviewCardContainer';

const OverviewSection: React.FC = () => (
	<Box pt={5}>
		<Typography component='h2' fontSize='1.5rem' fontWeight={900} color='#63687e' sx={{ pb: 3 }}>Overview - Today</Typography>
		<OverviewCardContainer />
	</Box>
);

export default OverviewSection;
