import Image from 'next/image';
import React from 'react';

interface ProjectThumbnailProps {
	description: string;
	title: string;
	imageUrl: any;
}

export default function ProjectThumbnail(props: ProjectThumbnailProps) {
	return (
		<div className='relative bg-red-500'>
			<Image
				src={props.imageUrl}
				width={550}
				height={100}
				alt='pepper8 splash'
				className='w-full h-[400px] brightness-[0.9] bg-cover '
			/>
			<div className='absolute bottom-0 text-white p-8  lg:text-base text-sm bg-gradient-to-t from-zinc-900 via-zinc-700 to-transparent w-full'>
				<h3>{props.title}</h3>
				<p className=''>{props.description}</p>
			</div>
		</div>
	);
}
