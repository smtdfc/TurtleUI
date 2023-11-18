export function getElement(d,r = document.body) {
	if (d instanceof HTMLElement) {
		return d
	}

	if (d instanceof Node) {
		return d
	}

	if (typeof d=="string") {
		return r.querySelector(d)
	}

	return null
}

export function createElement(tag="div",className=null,id=null){
	let element = document.createElement(tag)
	element.id = id
	element.className = className
	return element
}

export function generateKey(prefix = "_") {
	return `${prefix}${(Math.floor(Math.random()*100000)*Date.now()).toString(16)}`
}
