import Link from 'next/link';
import React from 'react';

export const Header = () => {
	return (
		<header className='header'>
			<h1>
				<Link href='/'>POKEDEX</Link>
			</h1>
		</header>
	);
};

export default Header;
