import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SecundaryButtonProps {
	title: string;
	className?: string;
}
export default function SecundaryButton(props: SecundaryButtonProps) {
	const defaultClass =
		'border border-blue-500 text-blue-500 px-8 py-1 font-semibold rounded-full';
	return (
		<button className={twMerge(defaultClass, props.className)}>
			{props.title}
		</button>
	);
}
