import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '@/styles';
import { fadeIn } from '@/utils/motion';

import headset from '../../public/headset.svg';

interface ExploreCardProps {
	id: string;
	imgURL: string;
	title: string;
	index: number;
	active: string;
	handleClick: (id: string) => void;
}

const ExploreCard = (props: ExploreCardProps) => {
	const { id, imgURL, title, index, active, handleClick } = props;

	const activeMotionClassDiv =
		active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]';

	return (
		<motion.div
			variants={fadeIn({
				direction: 'right',
				type: 'spring',
				delay: index * 0.5,
				duration: 0.75,
			})}
			className={`relative flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer ${activeMotionClassDiv}`}
			onClick={() => handleClick(id)}
		>
			<Image
				src={imgURL}
				alt={title}
				fill
				className='absolute w-full h-full object-cover rounded-[24px]'
			/>

			{active !== id ? (
				<h3 className='absolute z-0 font-semibold sm:text-[26px] text-lg text-white lg:bottom-20 lg:-rotate-90 lg:origin-[0,0]'>
					{title}
				</h3>
			) : (
				<div className='absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]'>
					<div
						className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
					>
						<Image
							src={headset}
							alt='headset'
							className='w-1/2 h-1/2 object-contain'
						/>
					</div>

					<p className='text-base font-normal leading-5 text-white uppercase'>
						Enter Metaverse
					</p>
					<h2 className='mt-6 font-semibold sm:text-[32px] text-2xl text-white'>
						{title}
					</h2>
				</div>
			)}
		</motion.div>
	);
};

export default ExploreCard;
