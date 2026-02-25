export const getAvatarUrl = (size: number, id?: number) =>
	`https://i.pravatar.cc/${size}${id != null ? `?img=${id}` : ''}`;
