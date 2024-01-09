export const formatStep: (index: number) => string = (index: number) =>
	Number(index).toString().padStart(2, '0')
