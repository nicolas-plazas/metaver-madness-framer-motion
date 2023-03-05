import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../styles';
import { navVariants } from '@/utils/motion';

import search from '../../public/search.svg';
import menu from '../../public/menu.svg';

const Navbar = () => (
	<motion.nav
		variants={navVariants}
		initial='hidden'
		whileInView='show'
		className={`${styles.xPaddings} py-8 relative`}
	>
		<div className='absolute w-1/2 inset-0 gradient-01' />

		<div className={`${styles.innerWidth} mx-auto flex justify-between items-center`}>
			<Image src={search} alt="search icon" className='w-5 h-5' />
			<h2 className='text-2xl text-white font-extrabold leading-7'>METAVERSUS</h2>
			<Image src={menu} alt="menu icon" className='w-5 h-5' />
		</div>
	</motion.nav>
);

export default Navbar;
