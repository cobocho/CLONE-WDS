import { style } from '@vanilla-extract/css';
import { vars } from '@/index.css';

export const button = style({
	backgroundColor: vars.colors.AccentCyan,
	color: vars.colors.LabelNormal,
	fontSize: '24px',
});
