import { useEffect } from 'react';

export const useChangeDocumentTitle = (pageTitle) => {
	useEffect(() => {
		document.title = `Simon Baey - ${pageTitle}`;
	}, [pageTitle]);
};
