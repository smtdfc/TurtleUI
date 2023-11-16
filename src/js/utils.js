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

export function generateKey(prefix = "_") {
	return `${prefix}${(Math.floor(Math.random()*100000)*Date.now()).toString(16)}`
}
