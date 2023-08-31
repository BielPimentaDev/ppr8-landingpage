import React from 'react';
import Carousel from 'nuka-carousel';
import ProjectThumbnail from './ProjectThumbnail';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

export default function SliderRender() {
	const lorem =
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum exercitationem quos temporibus similique et tenetur blanditiis ex, eaque corporis at dolorem est delectus, animi ut veniam quisquam officiis impedit alias. ';
	return (
		<Carousel
			className='max-w-[600px] bg-red-500'
			defaultControlsConfig={{
				pagingDotsStyle: {
					width: 200,
					height: 100,
					backgroundColor: 'red',
					opacity: 0,
					bottom: -30,
					display: 'none',
				},
				nextButtonText: <CaretRight size={24} weight='bold' color='white' />,
				prevButtonText: <CaretLeft size={24} weight='bold' color='white' />,
			}}>
			<ProjectThumbnail
				title='Site'
				description={lorem}
				imageUrl='/imgs/splash-2.png'
			/>
			<ProjectThumbnail
				title='Site'
				description={lorem}
				imageUrl='/imgs/splash-ppr8.png'
			/>
			<ProjectThumbnail
				title='Site'
				description={lorem}
				imageUrl='/imgs/splash-2.png'
			/>
			<ProjectThumbnail
				title='Site'
				description={lorem}
				imageUrl='/imgs/splash-ppr8.png'
			/>
		</Carousel>
	);
}
