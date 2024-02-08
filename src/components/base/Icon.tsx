import { forwardRef } from 'react';

import clsx from 'clsx';

import { unicodeToString } from '#utils/string';

import styles from './icon.module.scss';

export const Icon = forwardRef<HTMLSpanElement, IIconProps>((props, ref) => {
	const { className, code, type = 'light', size = 'default', onClick } = props;

	const iconSize = `${typeof size === 'number' ? size : EIconSize[size]}px`;
	const IconClsx = clsx(
		styles.icon,
		'fontAwesome',
		type,
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
