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
			<Typography fontSize='0.9rem' fontWeight={700} color='#63687e' sx={{ pl: 1 }}>{tag}</Typography>
		</Box>
		<Typography fontSize='4rem' fontWeight={900} color='#1e202a'>{count}</Typography>
		<Typography fontWeight={800} letterSpacing='0.25rem' color='#63687e'>{people}</Typography>
		<Box display='flex' justifyContent='center' mt={3}>
			<Box sx={{
				'& img': {
					paddingRight: '4px',
					paddingBottom: '4px'
				}
			}}>
				<img src={statIcon} />
			</Box>
			<Typography fontSize='0.9rem' fontWeight={900} color={statColor}>{stat}</Typography>
		</Box>
	</Card>
);

export default SocialCard;