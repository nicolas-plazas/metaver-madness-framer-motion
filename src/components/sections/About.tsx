import { motion } from 'framer-motion';
import { TypingText } from '../index';

import styles from '@/styles';
import { fadeIn, staggerContainer } from '@/utils/motion';

interface SpanProps {
	children: React.ReactNode;
}

const Span = ({ children }: SpanProps) => (
	<span className='font-extrabold text-white'>{children}</span>
);

const About = () => {
	return (
		<section className={`${styles.paddings} relative z-10`}>
			<div className='gradient-02 z-0' />
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
				className={`${styles.innerWidth} mx-auto flex flex-col ${styles.flexCenter}`}
			>
				<TypingText title='| About Metaversus' textStyles='text-center' />

				<motion.p
					variants={fadeIn({
						direction: 'up',
						type: 'tween',
						delay: 0.2,
						duration: 1,
					})}
					className='mt-2 font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
				>
					<Span>Metaverse</Span> is a new
					thing in the future, where you can enjoy the virtual world by feeling
					like it&apos;s really real, you can feel what you feel in this
					metaverse world, because this is really the{' '}
					<Span>
						madness of the metaverse
					</Span>{' '}
					of today, using only{' '}
					<Span>VR</Span> devices you can
					easily explore the metaverse world you want, turn your dreams into
					reality. Let&apos;s{' '}
					<Span>explore</Span> the madness
					of the metaverse by scrolling down
				</motion.p>

        <motion.img
          variants={fadeIn({
            direction: 'up',
            type: 'tween',
            delay: 0.3,
            duration: 1,
          })}
          src='/arrow-down.svg'
          alt='arrow down'
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
			</motion.div>
		</section>
	);
};

export default About;
