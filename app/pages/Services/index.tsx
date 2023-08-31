import MainContainer from '@/app/components/container/MainContainer';
import React from 'react';
import ServiceCard from './components/ServiceCard';
import HeaderText from '@/app/components/texts/HeaderText';
import Subtitle from '@/app/components/texts/Subtitle';
import SecundaryButton from '@/app/components/buttons/SecundaryButton';

export default function Services() {
	return (
		<MainContainer className='lg:flex-row  flex-col-reverse justify-around'>
			<div className='grid lg:grid-cols-2 grid-cols-1 gap-10 '>
				<ServiceCard color='blue' strong />
				<ServiceCard color='bg-red-400' />
				<ServiceCard color='bg-green-400' />
				<ServiceCard color='bg-yellow-400' />
			</div>
			<div className='   lg:w-1/3 '>
				<Subtitle>Our Portfolio</Subtitle>
				<HeaderText>O que fazemos?</HeaderText>
				<p className='pt-4 text-sm   text-zinc-500 '>
					We move with make a Creative Strategy for help your business goal, we
					help to improve your income by a services we have. make your content
					look interesting and make people look for your business
				</p>
				{/* <p className='text-blue-400  font-semibold pt-4 text-right'>
					Saber mais
				</p> */}
				<SecundaryButton title='Saber mais' className='w-full  p-2 my-8' />
			</div>
		</MainContainer>
	);
}
