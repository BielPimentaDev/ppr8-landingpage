import Image from 'next/image';
import React from 'react';
import RegularButton from '../components/buttons/RegularButton';

export default function Hero() {
	return (
		<div className='w-full   relative text-white'>
			<div className='  z-10 absolute h-full w-full flex flex-col  items-center  justify-center '>
				<h1 className=' text-center lg:text-5xl text-3xl font-bold  '>
					Transforme suas Ideias em
					<br /> Software de Sucesso!
				</h1>
				<p className='  text-center lg:text-xl mt-2 '>
					Da concepção à realidade digital: soluções personalizadas para as
					<br />
					necessidades únicas de cada cliente
				</p>
				<RegularButton title='Saiba mais' className='mt-12' />
			</div>
			<Image
				src='/imgs/hero-img.png'
				width={500}
				height={500}
				alt='computers image'
				className='w-full min-h-[700px] max-h-4 bg-contain'
			/>
		</div>
	);
}
