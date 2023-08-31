import Image from 'next/image';
import React from 'react';

export default function TestimonialCard() {
	return (
		<div className='shadow-xl rounded-lg max-w-xs px-6 py-8 border '>
			<div className='flex gap-6 '>
				<Image src='/imgs/profile.png' width={50} height={50} alt='profile' />
				<div>
					<strong className='text-blue-400'>Angel Rose</strong>
					<p className='text-zinc-400 text-xs'>Creative Menager</p>
				</div>
			</div>
			<p className='mt-4 text-sm text-zinc-500 pb-12'>
				There are many variations passages of Lorem Ipsum majority some by words
				which dont look
			</p>
		</div>
	);
}
