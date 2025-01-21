'use client';

import Image, { type ImageProps } from 'next/image';
import { Button, useTheme } from '@repo/design-system';
import ToggleDarkmode from './_components';

type Props = Omit<ImageProps, 'src'> & {
	srcLight: string;
	srcDark: string;
};

export default function Home() {
	return (
		<div>
			<ToggleDarkmode />
		</div>
	);
}
