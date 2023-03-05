import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '@/styles';
import { TitleText, TypingText } from '@/components';
import { fadeIn, staggerContainer } from '@/utils/motion';

import worldImage from '../../../public/map.png';
import people1 from '../../../public/people-01.png';
import people2 from '../../../public/people-02.png';
import people3 from '../../../public/people-03.png';

const World = () => {
	return (
		<section className={`${styles.paddings} relative z-10`}>
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
				className={`${styles.innerWidth} mx-auto flex flex-col`}
			>
				<TypingText title='| People on the World' textStyles='text-center' />
				<TitleText
					title={
						<>
							Track friends around you and invite them to play together in the
							same world
						</>
					}
					textStyles='text-center'
				/>

				<motion.div
					variants={fadeIn({
						direction: 'up',
						type: 'tween',
						delay: 0.3,
						duration: 1,
					})}
					className='relative mt-[68px] flex w-full h-[550px]'
				>
					<Image
						src={worldImage}
						alt='map'
						className='w-full h-full object-cover'
					/>

          {/* People 1 */}
					<div className='absolute bottom-3/4 lg:bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]'>
						<Image
							src={people1}
							alt='people'
							className='w-full h-full'
						/>
					</div>

          {/* People 2 */}
          <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]'>
						<Image
							src={people2}
							alt='people'
							className='w-full h-full'
						/>
					</div>

          {/* People 3 */}
          <div className='absolute bottom-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]'>
						<Image
							src={people3}
							alt='people'
							className='w-full h-full'
						/>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default World;
