import { forwardRef } from 'react';

import clsx from 'clsx';

import styles from './icon.module.scss';

const safeStringFromCodePoint = (codePoint: number) => {
	if (isNaN(codePoint) || codePoint < 0 || codePoint > 0x10FFFF || Math.floor(codePoint) !== codePoint) return '';

	return String.fromCodePoint(codePoint);
};

const unicodeToString = (unicode: string) => {
	return safeStringFromCodePoint(parseInt(`0x${unicode}`, 16));
};

export const Icon = forwardRef<HTMLSpanElement, IIconProps>((props, ref) => {
	const { className, code, type = 'light', size = 'default', onClick } = props;

	const iconSize = `${typeof size === 'number' ? size : EIconSize[size]}px`;
	const IconClsx = clsx(
		styles.icon,
		'fontAwesome',
		type && styles[type],
		onClick && styles.iconButton,
		className,
	);

	return (
		<i
			ref={ref}
			className={IconClsx}
			style={{ ['--iconSize' as string]: iconSize }}
			data-content={unicodeToString(code)}
			role='img'
			onClick={onClick}
		/>
	);
});

Icon.displayName = 'Icon';

type IIconProps = {
	className?: string;
	code: string;
	type?: keyof typeof EIconType;
	size?: number | keyof typeof EIconSize;
	onClick?: () => void;
}
enum EIconType {
	thin = 'thin',
	light = 'light',
	regular = 'regular',
	solid = 'solid',
	duotone = 'duotone',
	sharpSolid = 'sharpSolid',
	sharpRegular = 'sharpRegular',
	sharpLight = 'sharpLight',
	brand = 'brand',
}

enum EIconSize {
	mini = 12,
	default = 18,
	large = 24,
}
