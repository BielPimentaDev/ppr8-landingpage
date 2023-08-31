import React, { ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

interface SubtitleProps {
	children: ReactNode;
	className?: string;
}

export default function Subtitle(props: SubtitleProps) {
	const defaultClass = 'text-blue-400  lg:text-xl  pb-2';
	return (
		<p className={twMerge(defaultClass, props.className)}>{props.children}</p>
	);
}
