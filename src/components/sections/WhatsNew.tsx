import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '@/styles';
import { newFeatures } from '@/constants';
import { NewFeatures, TitleText, TypingText } from '@/components';
import { planetVariants, staggerContainer, fadeIn } from '@/utils/motion';

import whatsNewImg from '../../../public/whats-new.png'

const WhatsNew = () => {
	return (
		<section className={`${styles.paddings} relative z-10`}>
			<motion.div
				variants={staggerContainer({
					delayChildren: 0.5,
					staggerChildren: 0.2,
				})}
				initial='hidden'
				whileInView='show'
				viewport={{
					once: false,
					amount: 0.25,
				}}
				className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
			>
				<motion.div
					variants={fadeIn({
						direction: 'right',
						type: 'tween',
						delay: 0.2,
						duration: 1,
					})}
					className='flex-[0.95] flex justify-center flex-col'
				>
					<TypingText title='| Whats new?' />
					<TitleText title={<>What&apos;s new about Metaversus?</>} />

          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
				</motion.div>

        <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image
          src={whatsNewImg}
          alt="get started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
			</motion.div>
		</section>
	);
};

export default WhatsNew;
