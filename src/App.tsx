import React from 'react';
import { Box, Container } from '@mui/material';
import Header from './components/Header';
import SocialCardContainer from './components/SocialCardContainer';
import OverviewSection from './components/OverviewSection';

const App: React.FC = () => (
	<Box>
		<Box sx={{background: 'linear-gradient(to bottom, #f5f7ff 0%, #f5f7ff 70%, #fff 70%, #fff 100%)'}}>
			<Container maxWidth='xl'>
				<Header />
				<SocialCardContainer />
			</Container>
		</Box>
		<Container maxWidth='xl'>
			<OverviewSection />
		</Container>
	</Box>
);

export default App;
