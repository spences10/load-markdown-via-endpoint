import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(`parse-markdown?file=intro`);
	const html = await res.text();
	return { html };
};
