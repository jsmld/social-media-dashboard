import { Stack } from '@mui/material';
import React from 'react';
import OverviewCard from '../OverviewCard';

const OverviewCardContainer: React.FC = () => (
	<Stack spacing={4}>
		<Stack direction='row' justifyContent='space-between'>
			<OverviewCard info='Page View' icon='/icon-facebook.svg' count='87' statIcon='/icon-up.svg' statColor='#1CB589' stat='3%'/>
			<OverviewCard info='Likes' icon='/icon-facebook.svg' count='52' statIcon='/icon-down.svg' statColor='#DB414C' stat='2%'/>
			<OverviewCard info='Likes' icon='/icon-twitter.svg' count='54562' statIcon='/icon-up.svg' statColor='#1CB589' stat='2257%'/>
			<OverviewCard info='Profile Views' icon='/icon-twitter.svg' count='52k' statIcon='/icon-up.svg' statColor='#1CB589' stat='1375%'/>
		</Stack>
		<Stack direction='row' justifyContent='space-between'>
			<OverviewCard info='Retweets' icon='/icon-instagram.svg' count='117' statIcon='/icon-up.svg' statColor='#1CB589' stat='303%'/>
			<OverviewCard info='Likes' icon='/icon-instagram.svg' count='507' statIcon='/icon-up.svg' statColor='#1CB589' stat='553%'/>
			<OverviewCard info='Likes' icon='/icon-youtube.svg' count='107' statIcon='/icon-down.svg' statColor='#DB414C' stat='19%'/>
			<OverviewCard info='Total Views' icon='/icon-youtube.svg' count='1407' statIcon='/icon-down.svg' statColor='#DB414C' stat='12%'/>
		</Stack>
	</Stack>
);

export default OverviewCardContainer; 
