import { createTheme } from '@mui/material/styles';
import { orange, red } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

// Create a theme instance.
const theme = createTheme({
	typography: {
		fontFamily: 'Inter'
	}
});

export const getCustomTheme = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === 'light'
			? {
				primary: red,
			}
			: {
				primary: orange,
			})
	}, theme
});


export default theme;
