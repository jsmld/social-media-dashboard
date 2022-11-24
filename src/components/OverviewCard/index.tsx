import React from 'react';
import { Box, Card, Typography } from '@mui/material';

type Props = {
  info: string;
  icon: string;
  count: string;
  statIcon:string;
  statColor: string;
  stat: string;
}

const OverviewCard: React.FC<Props> = ({ info, icon, count, statIcon, statColor, stat}) => (
	<Card variant='outlined' sx={{
		display: 'flex',
		flexDirection: 'column',
		rowGap: 3,
		bgcolor: '#f0f2fa',
		minWidth: '20%',
		maxHeight: '265px',
		px: 4,
		py: 3,
		'&:hover': {
			bgcolor: '#E1E3F0'
		}
	}}>
		<Box display='flex' justifyContent='space-between'>
			<Typography fontSize='0.875rem' fontWeight={900} color='#63687e'>{info}</Typography>
			<Box display='flex' justifyContent='center' alignItems='center'>
				<img src={icon} />
			</Box>
		</Box>
		<Box display='flex' justifyContent='space-between'>
			<Typography fontSize='2rem' fontWeight={900} color='#1e202a'>{count}</Typography>
			<Box display='flex' alignItems='center'>
				<Box sx={{
					'& img': {
						paddingRight: '4px',
						paddingBottom: '4px'
					}
				}}>
					<img src={statIcon} />
				</Box>
				<Typography color={statColor}>{stat}</Typography>
			</Box>
		</Box>
	</Card>
);

export default OverviewCard;
