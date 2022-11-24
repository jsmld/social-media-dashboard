import React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import { getCustomTheme } from './themes/theme';
// import { PaletteMode } from '@mui/material';
import { ColorModeContext } from './contexts/ThemeContext';

// const [mode, setMode] = React.useState<PaletteMode>('light');
// const colorMode = React.useMemo(
// 	() => ({
// 		toggleColorMode: () => {
// 			setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
// 		},
// 	}),
// 	[],
// );

createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={getCustomTheme(mode)}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<App />
			</ThemeProvider>
		</ColorModeContext.Provider>
	</React.StrictMode>
);
