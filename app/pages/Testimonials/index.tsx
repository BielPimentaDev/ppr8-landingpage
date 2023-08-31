import MainContainer from '@/app/components/container/MainContainer';
import React from 'react';
import TestimonialCard from './components/TestimonialCard';
import { CaretRight, CaretLeft } from '@phosphor-icons/react';
import HeaderText from '@/app/components/texts/HeaderText';
import Subtitle from '@/app/components/texts/Subtitle';

export default function Testimonials() {
	return (
		<MainContainer className=''>
			<Subtitle>Testimonials</Subtitle>
			<HeaderText>People Talk about us</HeaderText>
			<div className='mt-16 flex gap-12 justify-center items-center lg:flex-row flex-col'>
				{/* <div>
					<CaretLeft size={32} weight='bold' color='gray' />
					<CaretRight size={32} weight='bold' color='gray' />
				</div> */}

				<TestimonialCard />
				<TestimonialCard />
				<TestimonialCard />
			</div>
		</MainContainer>
	);
}
