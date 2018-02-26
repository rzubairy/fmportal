import defaultTheme from './themedefault';
import clone from 'clone';

const theme = clone(defaultTheme);
theme.palette.primary = ['#1f83ff'];
theme.palette.secondary = ['#3dbd7d'];
export default theme;
