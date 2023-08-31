import React, { useEffect, useState } from 'react';
import SecundaryButton from './buttons/SecundaryButton';

import { List } from '@phosphor-icons/react';

export default function Header() {
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => {
		setScrollPosition(window.scrollY);
	};

	useEffect(() => {
		// Attach the event listener
		window.addEventListener('scroll', handleScroll);

		// Clean up the event listener on unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<nav
			className={`top-0    flex ${
				scrollPosition > 680
					? 'text-black bg-white'
					: 'text-white backdrop-blur-sm'
			}  w-full max-w-7xl justify-between items-center px-16 p-8 fixed z-20`}>
			<strong>PEPPER8</strong>
			<ul className='lg:flex gap-8 hidden'>
				<li>
					<strong>Home</strong>
				</li>
				<li>Sobre</li>
				<li>Sobre</li>
				<li>Sobre</li>
			</ul>
			<SecundaryButton title='contact us' className='hidden lg:block' />
			<List size={32} weight='bold' className='lg:hidden ' />
		</nav>
	);
}
