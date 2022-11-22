import { Box, Card, Typography } from '@mui/material';
import React from 'react';

type Props = {
	barColor: string;
  icon: string;
  tag: string;
  count: string;
  people: string;
  statIcon: string;
	statColor: string;
  stat: string; 
}

const SocialCard: React.FC<Props> = ({ barColor, icon, tag, count, people, statIcon, statColor, stat}) => (
	<Card variant='outlined' sx={{ bgcolor: '#f0f2fa', minWidth: '20%', maxHeight: '265px', textAlign: 'center', p: 6, borderTop: `5px solid ${barColor}` }}>
		<Box display='flex' justifyContent='center'>
			<img src={icon} />
			<Typography fontSize='0.9rem' fontWeight={700} sx={{ pl: 1 }}>{tag}</Typography>
		</Box>
		<Typography fontSize='4rem' fontWeight={900}>{count}</Typography>
		<Typography>{people}</Typography>
		<Box display='flex' justifyContent='center' mt={3}>
			<Box>
				<img src={statIcon} />
			</Box>
			<Typography color={statColor}>{stat}</Typography>
		</Box>
	</Card>
);

export default SocialCard;