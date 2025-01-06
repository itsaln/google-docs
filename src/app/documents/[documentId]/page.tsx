const DocumentPage = async ({ params }: { params: Promise<{ documentId: string }> }) => {
	const { documentId } = await params

	return <div>Document Page: {documentId}</div>
}

export default DocumentPage
