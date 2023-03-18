export const hookAsync = () => {
	const asyncFetch = (asyncFn, successFn) =>
		asyncFn().then((res) => successFn(res));

	return {
		asyncFetch,
	};
};
