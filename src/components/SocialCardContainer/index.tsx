import React from 'react';
import { Stack, useMediaQuery } from '@mui/material';
import SocialCard from '../SocialCard';

const SocialCardContainer: React.FC = () => {
	const desktop = useMediaQuery('(min-width: 600px)');
	return (
		<Stack direction={desktop ? 'row' : 'column'} justifyContent='space-between' spacing={desktop ? 0 : 4}>
			<SocialCard barColor='#198ff5' icon='/icon-facebook.svg' tag='@nathanf' count='1987' people='FOLLOWERS' statIcon='/icon-up.svg' statColor='#1CB589' stat='12 Today'/>
			<SocialCard barColor='#1ca0f2' icon='/icon-twitter.svg' tag='@nathanf' count='1044' people='FOLLOWERS' statIcon='/icon-up.svg' statColor='#1CB589' stat='99 Today'/>
			<SocialCard barColor='#F49E76' icon='/icon-instagram.svg' tag='@realnathanf' count='11k' people='FOLLOWERS' statIcon='/icon-up.svg' statColor='#1CB589' stat='1099 Today'/>
			<SocialCard barColor='#c4032a' icon='/icon-youtube.svg' tag='Nathan F.' count='8239' people='SUBSCRIBERS' statIcon='/icon-down.svg' statColor='#DB414C' stat='144 Today'/>
		</Stack>
	);
};

export default SocialCardContainer;
