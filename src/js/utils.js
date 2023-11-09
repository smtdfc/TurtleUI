export function getElement(d) {
	if (d instanceof HTMLElement) {
		return d
	}

	if (d instanceof Node) {
		return d
	}

	if (typeof d=="string") {
		return document.querySelector(d)
	}

	return null
}