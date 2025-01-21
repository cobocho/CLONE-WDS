import { style } from '@vanilla-extract/css';
import { pretentdardJP, vars } from '../index.css';

export const button = style({
	backgroundColor: vars.colors.AccentCyan,
	color: vars.colors.LabelNormal,
	fontSize: '24px',
	fontFamily: pretentdardJP,
	fontWeight: 100,
});
