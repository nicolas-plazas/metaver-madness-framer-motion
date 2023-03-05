import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '@/styles';
import { exploreWorlds } from '@/constants';
import { staggerContainer } from '@/utils/motion';
import { ExploreCard, TitleText, TypingText } from '@/components';

const Explore = () => {
	const [active, setActive] = useState('world-2');

	return (
		<section className={`${styles.paddings}`} id='explore'>
			<motion.div
				variants={staggerContainer({
					staggerChildren: 0.1,
					delayChildren: 0.5,
				})}
				initial='hidden'
				whileInView='show'
				viewport={{
					once: false,
					amount: 0.25,
				}}
				className={`${styles.innerWidth} mx-auto flex odd:flex-col`}
			>
				<TypingText title='| The World' textStyles='text-center' />

				<TitleText
					title={
						<>
							Choose the world you want <br className='md:block hidden' /> to
							explore
						</>
					}
					textStyles='text-center'
				/>

				<div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
					{exploreWorlds.map((world, index) => (
						<ExploreCard
							key={world.id}
							id={world.id}
              imgURL={world.imgUrl}
              title={world.title}
							index={index}
							active={active}
							handleClick={setActive}
						/>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Explore;
