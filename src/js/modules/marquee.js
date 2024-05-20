const marquee = () => {
	const container = document.querySelector('.sponsored__main')
	const listWrapper = document.querySelector('.sponsored__list')

	const clone = listWrapper.cloneNode(true)

	container.appendChild(clone)
}

export default marquee