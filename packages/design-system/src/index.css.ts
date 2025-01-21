import {
	createGlobalThemeContract,
	createGlobalTheme,
	globalStyle,
	globalFontFace,
	fontFace,
} from '@vanilla-extract/css';

import * as LIGHT from './tokens/variables/light';
import * as DARK from './tokens/variables/dark';

function generateContract<T extends object>(obj: T): T {
	return Object.fromEntries(
		Object.entries(obj).map(([key]) => [key, key]),
	) as T;
}

const colorContract = generateContract(LIGHT);

export const DARK_MODE_CLASS_NAME = 'dark-mode';

export const vars = createGlobalThemeContract(
	{
		colors: colorContract,
	},
	(value) => `WDS-${value}`,
);

createGlobalTheme('body', vars, {
	colors: {
		...LIGHT,
	},
});

createGlobalTheme(`body.${DARK_MODE_CLASS_NAME}`, vars, {
	colors: {
		...DARK,
	},
});

export const pretentdardJP = 'Pretendard JP';

globalFontFace(pretentdardJP, {
	src: 'url(https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css)',
	fontWeight: 100,
	fontStyle: 'normal',
	fontDisplay: 'swap',
});
