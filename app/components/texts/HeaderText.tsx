import React, { ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

interface HeaderTextProps {
	children: ReactNode;
	className?: string;
}

export default function HeaderText(props: HeaderTextProps) {
	const defaultClass = 'font-semibold lg:text-5xl text-3xl';
	return (
		<h1 className={twMerge(defaultClass, props.className)}>{props.children}</h1>
	);
}
