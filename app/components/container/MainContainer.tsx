import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
	children: ReactNode;
	className?: string;
}
export default function MainContainer(props: ContainerProps) {
	const defaultClass =
		' w-full max-w-7xl mx-auto flex flex-col items-center justify-center  px-4';
	return (
		<div className={twMerge(defaultClass, props.className)}>
			{/* // className=' w-full max-w-7xl mx-auto flex flex-col items-center justify-center my-32'> */}
			{props.children}
		</div>
	);
}
