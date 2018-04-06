
async function parseModifiedHunkComplete(originalContent, patch, a, b) {
	let diffHunks = patch.split('\n');
		} else if (/^\-/.test(line)) {
			// do nothing
	let diffHunks = modifyDiffInfo.split('\n');
export async function parseDiff(reviews: any[], repository: Repository, parentCommit: string) {
	for (let i = 0; i < reviews.length; i++) {
		let review = reviews[i];
		if (review.status === 'modified') {
			let fileName = review.filename;
				let originalContent = await getFileContent(repository.path, parentCommit, fileName);
				let richFileChange = await parseModifiedHunkComplete(originalContent, review.patch, fileName, fileName);
				let richFileChange = await parseModifiedHunkFast(review.patch, fileName, fileName);
		} else if (review.status === 'removed') {
			let fileName = review.filename;
			let diffHunks = review.patch.split('\n');
				} else if (/^\-/.test(diffHunks[i])) {
			let originalFilePath = await writeTmpFile(contentArray.join('\n'), path.extname(fileName));
			let filePath = await writeTmpFile('', path.extname(fileName));
			let richFileChange = new RichFileChange(filePath, originalFilePath, GitChangeType.DELETE, fileName);
		} else {
			// added
			let fileName = review.filename;
			let diffHunks = review.patch.split('\n');
				} else if (/^\+/.test(diffHunks[i])) {
			let oriFilePath = await writeTmpFile('', path.extname(fileName));
			let filePath = await writeTmpFile(contentArray.join('\n'), path.extname(fileName));
			let richFileChange = new RichFileChange(filePath, oriFilePath, GitChangeType.ADD, fileName);