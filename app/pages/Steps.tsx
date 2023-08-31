import React from 'react';
import MainContainer from '../components/container/MainContainer';
import RegularButton from '../components/buttons/RegularButton';
import Image from 'next/image';
import Subtitle from '../components/texts/Subtitle';
import HeaderText from '../components/texts/HeaderText';

export default function Steps() {
	const a = [0, 1, 2];
	return (
		<MainContainer>
			<Subtitle>Our Portfolio</Subtitle>
			<HeaderText>O que fazemos?</HeaderText>
			<p className='pt-6 lg:w-2/5 text-sm text-center text-zinc-500'>
				all projects that we have already done , proven can help to use more
				comfortable, then can used by client from our business
			</p>
			<ul className='flex gap-16 lg:flex-row flex-col  my-12 justify-center'>
				{a.map((i, index) => {
					return (
						<li
							key={index}
							className='lg:max-w-[20%] flex flex-col items-center justify-center'>
							<div className='relative'>
								<Image
									src='/imgs/products-1.png'
									alt='step 1'
									width={250}
									height={250}
									className='brightness-75'
								/>
								<p className='absolute bottom-4 left-4 text-white font-'>
									Design Byte App
								</p>
							</div>
							<p className='text-center text-sm pt-4 lg:block hidden'>
								all projects that we have already done , proven can help to use
								more comfortable, then can used by client from our business
							</p>
						</li>
					);
				})}
			</ul>
			<RegularButton
				title='Fazer orcamento'
				className='mt-8 py-3 lg:w-auto w-full '
			/>
		</MainContainer>
	);
}
