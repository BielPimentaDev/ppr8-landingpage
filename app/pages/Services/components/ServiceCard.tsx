import React from 'react';
import { DeviceMobile } from '@phosphor-icons/react';
import { twMerge } from 'tailwind-merge';

interface ServiceCardProps {
	color: string;
	text?: string;
	strong?: boolean;
}
export default function ServiceCard(props: ServiceCardProps) {
	const defaultClass = `bg-blue-400 p-4 rounded-full`;
	return (
		<div
			className={` border ${
				props.strong ? 'shadow-xl' : 'border-zinc-200'
			} rounded-xl flex flex-col justify-center items-center py-12 px-8 `}>
			<div className={twMerge(defaultClass, props.color)}>
				<DeviceMobile size={32} weight='bold' color='white' />
			</div>
			<strong className='text-center mt-4'>
				Mobile Aplications <br /> Devlopment
			</strong>
		</div>
	);
}
