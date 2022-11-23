import React from 'react';
import { Box, Container } from '@mui/material';
import Header from './components/Header';
import SocialCardContainer from './components/SocialCardContainer';

const App: React.FC = () => (
	<Box sx={{background: 'linear-gradient(to bottom, #f5f7ff 0%, #f5f7ff 70%, #fff 70%, #fff 100%)'}}>
		<Container maxWidth='xl'>
			<Header />
			<SocialCardContainer />
		</Container>
	</Box>
);

export default App;
