import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

interface TypingTextProps {
	title: string;
	textStyles?: string;
}

const TypingText = (props: TypingTextProps) => {
	const { title, textStyles } = props;

	return (
		<motion.p
			variants={textContainer}
			className={`text-sm font-normal text-secondary-white ${textStyles}`}
		>
			{Array.from(title).map((letter, index) => (
				<motion.span key={index} variants={textVariant2}>
					{letter === ' ' ? '\u00A0' : letter}
				</motion.span>
			))}
		</motion.p>
	);
};

interface TitleTextProps {
	title: JSX.Element;
	textStyles?: string;
}

const TitleText = (props: TitleTextProps) => {
	const { title, textStyles } = props;

	return (
		<motion.h2
			variants={textVariant2}
			initial='hidden'
			whileInView='show'
			className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
		>
			{title}
		</motion.h2>
	);
};

export { TypingText, TitleText };
