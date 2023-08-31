import React from 'react';
import { twMerge } from 'tailwind-merge';

interface RegularButtonProps {
	title: string;
	className?: string;
}
export default function RegularButton(props: RegularButtonProps) {
	const defaultClass = 'bg-blue-500  px-8 py-2  rounded-full text-white';
	return (
		<button className={twMerge(defaultClass, props.className)}>
			{props.title}
		</button>
	);
}
