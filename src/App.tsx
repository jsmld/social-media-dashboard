import React from 'react';
import { Box, Container } from '@mui/material';
import Header from './components/Header';
import SocialCardContainer from './components/SocialCardContainer';

const App: React.FC = () => (
	<Box bgcolor='#f5f7ff'>
		<Container maxWidth='xl'>
			<Header />
			<SocialCardContainer />
		</Container>
	</Box>
);

export default App;
