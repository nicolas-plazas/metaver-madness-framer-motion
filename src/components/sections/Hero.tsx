import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../../styles';
import { slideIn, staggerContainer, textVariant } from '../../utils/motion';
import cover from '../../../public/cover.png';
import stamp from '../../../public/stamp.png';

const Hero = () => {
	return (
		<section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
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
				<div className='flex flex-col justify-center items-center relative z-10'>
					<motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
						Metaverse
					</motion.h1>
					<motion.div variants={textVariant(1.2)}>
						<h1
							className={`flex justify-center items-center ${styles.heroHeading}`}
						>
							Ma
							<span className={styles.heroDText} />
							Ness
						</h1>
					</motion.div>
				</div>

				<motion.div
					variants={slideIn({
						direction: 'right',
						type: 'tween',
						delay: 0.2,
						duration: 1,
					})}
					className='relative w-full md:-mt-5 -mt-3'
				>
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-0 -top-8" />

					<Image
						src={cover}
						alt='Planets'
						className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative'
					/>

					<a href='#explore'>
						<div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10'>
							<Image
								src={stamp}
								alt='stamp'
								className='sm:w-[150px] w-[100px] sm:h-[155px] h-[100px] object-contain'
							/>
						</div>
					</a>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Hero;
