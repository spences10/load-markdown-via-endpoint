import { readFile } from 'fs';
import { marked } from 'marked';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	let file = url.searchParams.get('file');

	const getMarkdown = () => {
		return new Promise((resolve, reject) => {
			readFile(`src/lib/copy/${file}.md`, 'utf8', (err, data) => {
				if (err) {
					reject(err);
				}
				resolve(data);
			});
		});
	};

	let markdown = (await getMarkdown()) as string;
	let html = marked(markdown);

	return new Response(html, {
		headers: {
			'content-type': 'text/html',
		},
	});
};
