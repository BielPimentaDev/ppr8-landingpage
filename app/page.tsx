'use client';
import Image from 'next/image';
import Header from './components/Header';
import Hero from './pages/Hero';
import Steps from './pages/Steps';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import Footer from './pages/Footer';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center lg:gap-44 gap-24 justify-center'>
			<Header />
			<Hero />
			<Steps />
			<Services />
			<Portfolio />
			<Testimonials />
			<Footer />
		</main>
	);
}
