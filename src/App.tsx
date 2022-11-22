import React from 'react';
import { Box, Container } from '@mui/material';
import Header from './components/Header';

const App: React.FC = () => (
	<Box bgcolor='#F8F9FF'>
		<Container maxWidth='xl'>
			<Header />
		</Container>
	</Box>
);

export default App;
