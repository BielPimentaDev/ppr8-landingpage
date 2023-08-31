import MainContainer from '@/app/components/container/MainContainer';
import Image from 'next/image';
import React from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import HeaderText from '@/app/components/texts/HeaderText';
import Subtitle from '@/app/components/texts/Subtitle';
import ProjectThumbnail from './components/ProjectThumbnail';
import SliderRender from './components/SliderRender';
import RegularButton from '@/app/components/buttons/RegularButton';

export default function Portfolio() {
	return (
		<MainContainer className='lg:flex-row  justify-around '>
			<div className='lg:w-1/3 mb-6 lg:mb-0 '>
				<div className=''>
					<Subtitle>Testimonials</Subtitle>
					<HeaderText>Projetos de impacto</HeaderText>
					<p className='pt-4 text-sm   text-zinc-500 '>
						We move with make a Creative Strategy for help your business goal,
						We move with make a Creative Strategy for help your business goal,
					</p>
				</div>
				<div className='lg:mt-16 mr-auto my-6 lg:block hidden'>
					<RegularButton
						title='Fazer um orcamento'
						className='w-full lg:w-auto p-3 px-8'
					/>
				</div>
			</div>

			<div>
				<div className='shadow-xl'>
					<SliderRender />
				</div>
				<div className='lg:mt-16 mr-auto my-6 lg:hidden block'>
					<RegularButton
						title='Fazer um orcamento'
						className='w-full lg:w-auto p-3'
					/>
				</div>
			</div>
		</MainContainer>
	);
}
